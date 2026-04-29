const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Retail Store Sales | Excel Analysis",
    description: "Comprehensive retail store sales data analysis built in Microsoft Excel. Leverages pivot tables, advanced formulas, and interactive dashboards to uncover sales trends, customer behavior, and product performance insights.",
    image: `${base}retail_excel.png`,
    tags: ["Excel", "Data Analysis", "Pivot Tables", "Dashboards"],
    github: "https://github.com/rishiraj38/SECTIONDGROUP15RetailStoreSales"
  },
  {
    name: "Uber Analysis | Tableau Dashboard",
    description: "Interactive Tableau dashboard analyzing Uber ride data. Visualizes trip trends, peak demand hours, and geographic patterns through dynamic filters, KPI cards, and intuitive charts to surface actionable mobility insights.",
    image: `${base}uber_tableau.png`,
    tags: ["Tableau", "Data Visualization", "Business Intelligence", "Dashboards"],
    live: "https://public.tableau.com/app/profile/rishi.raj6174/viz/UberDashboard_17774794856670/Dashboard1?publish=yes"
  },
  {
    name: "Portfolio Exposure & Default Risk Overview | Tableau Dashboard",
    description: "Tableau dashboard providing a holistic view of portfolio exposure and default risk. Highlights credit concentration, risk segmentation, and default probabilities through interactive visuals to support data-driven risk management decisions.",
    image: `${base}Portfolio_Exposure_&_Default_Risk_Overview.png`,
    tags: ["Tableau", "Risk Analytics", "Data Visualization", "Dashboards"],
    live: "https://public.tableau.com/shared/4SBGTH5PQ?:display_count=n&:origin=viz_share_link"
  }
]

export default projects
