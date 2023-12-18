import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import Card from "../components/card"
import Grid from "../components/grid"
import Grid2 from "@mui/material/Grid"

export default function Contact() {
    const handleLearnMore = () => alert("You learned even more")
    const itemArray = new Array(10).fill(1)

  return (
    <div>
        <Link to="/"><Button variant="contained">Home</Button></Link>

        <Grid>
            {itemArray.map((_, index) =>
                <Grid2 item xs={6} key={index}>
                    <Card
                        title={`Contact info card No. ${index + 1}`}
                        description="This is yet another generic info card with some
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta ad accusantium eos sit at repudiandae. Temporibus
                        porro provident rem ad, animi reiciendis dolorem necessitatibus
                        nostrum ex, tenetur, molestias totam laborum!' text.
                        Click below to see info :)"
                        actionText="Learn more"
                        onActionClick={handleLearnMore}
                        />
                </Grid2>
            )}
        </Grid>
    </div>
  )
}
