import { EllipsisVertical } from "lucide-react"
import { Button } from "../ui/button"

export default function options() {

    const openMenu = (event) => {
        console.log(event.target.id)
    }

    return (
        <Button onClick={ openMenu }>
        </Button>
    )
}