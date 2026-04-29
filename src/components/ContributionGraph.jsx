import {useEffect, useState} from "react"

const USERNAME = "rishiraj38"
const LEVEL_COLORS = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

export default function ContributionGraph(){
  const [weeks, setWeeks] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function fetchContributions(){
      try{
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
        if(!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if(cancelled) return

        const contributions = data.contributions || []
        const grouped = []
        let currentWeek = []

        contributions.forEach((day) => {
          const date = new Date(day.date)
          const weekday = date.getDay()
          if(weekday === 0 && currentWeek.length){
            grouped.push(currentWeek)
            currentWeek = []
          }
          currentWeek.push(day)
        })
        if(currentWeek.length) grouped.push(currentWeek)

        const totalCount = typeof data.total === "object"
          ? Object.values(data.total).reduce((a, b) => a + b, 0)
          : contributions.reduce((a, c) => a + c.count, 0)

        setWeeks(grouped)
        setTotal(totalCount)
      } catch(err){
        if(!cancelled) setError(err.message)
      } finally {
        if(!cancelled) setLoading(false)
      }
    }
    fetchContributions()
    return () => { cancelled = true }
  }, [])

  const monthLabels = []
  let lastMonth = -1
  weeks.forEach((week, wi) => {
    const firstDay = week[0]
    if(!firstDay) return
    const month = new Date(firstDay.date).getMonth()
    if(month !== lastMonth){
      monthLabels.push({weekIndex: wi, label: MONTHS[month]})
      lastMonth = month
    }
  })

  return(
    <div className="contribution-section">
      <h3 className="contribution-title">
        {loading
          ? "Loading contributions…"
          : error
            ? "Could not load contributions"
            : `${total.toLocaleString()} contributions in the last year`}
      </h3>
      <a
        href={`https://github.com/${USERNAME}`}
        target="_blank"
        rel="noreferrer"
        className="contribution-link"
      >
        View on GitHub →
      </a>
      <div className="contribution-graph">
        {weeks.map((week, wi) => (
          <div key={wi} className="contribution-week">
            {week.map((day) => (
              <div
                key={day.date}
                className="contribution-cell"
                style={{backgroundColor: LEVEL_COLORS[day.level] || LEVEL_COLORS[0]}}
                title={`${day.count} contributions on ${day.date}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="contribution-legend">
        <span className="contribution-legend-label">Less</span>
        {LEVEL_COLORS.map((color, i) => (
          <div
            key={i}
            className="contribution-cell"
            style={{backgroundColor: color}}
          />
        ))}
        <span className="contribution-legend-label">More</span>
      </div>
    </div>
  )
}
