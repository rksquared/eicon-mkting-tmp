import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Gill Sans",
    "Lato",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  scaleRatio: 3,
  bodyFontFamily: ["DINPro-Regular", "Fira Code Retina", "serif"],
})

export default typography

// lawtonTheme.baseFontSize = "18px"
// lawtonTheme.baseLineHeight = 1.666
// lawtonTheme.headerFontFamily = [
//   "Gill Sans",
//   "Lato",
//   "Avenir Next",
//   "Helvetica Neue",
//   "Segoe UI",
//   "Helvetica",
//   "Arial",
//   "sans-serif",
// ]
// lawtonTheme.scaleRatio = 3
// lawtonTheme.bodyFontFamily = ["DINPro-Regular", "Fira Code Retina", "serif"]
// lawtonTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
//   'h2,h3': {
//     fontWeight: 100
//   }
// })