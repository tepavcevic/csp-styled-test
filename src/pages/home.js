import  Button  from "@mui/material/Button" ;
import { Link } from "react-router-dom";
import Card from "../components/card";
import Search from "../components/search";

export default function Home() {
    const handleLearnMore = () => alert("You learned more")

  return (
    <div>
        <Link to="/contact"><Button variant="contained">Contact</Button></Link>

        <Card
            title="Info card"
            description="This is generic info card. Click below to see info :)"
            actionText="Learn more"
            onActionClick={handleLearnMore}
        />
        <Search />
    </div>
  )
}
