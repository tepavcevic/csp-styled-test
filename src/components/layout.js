import Container from "@mui/material/Container";

export default function Layout({children}) {
  return (
    <Container maxWidth="xl" style={{ padding: '30px' }} >{children}</Container>
  )
}
