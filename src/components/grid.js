import GridMUI from "@mui/material/Grid";

export default function Grid({children}) {
  return (
    <GridMUI container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} padding="30px 0">
        {children}
    </GridMUI>
  )
}
