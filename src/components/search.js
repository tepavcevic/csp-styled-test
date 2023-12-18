import { Chip, FormControl,  TextField} from "@mui/material";
import { useEffect, useRef } from "react";

export default function Search() {
    const searchRef = useRef(null)

    const handleSearckShortcut = (event) => {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault()
            searchRef?.current?.focus()
        }
        if (document.activeElement === searchRef.current && event.key === 'Escape') {
            searchRef?.current?.blur()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleSearckShortcut)
        return () => document.removeEventListener("keydown", handleSearckShortcut)
    })

  return (
    <search>
        <FormControl>
            <TextField label="Search" inputRef={searchRef} placeholder="Search" InputProps={{endAdornment: <Chip label="Ctrl+k" variant="filled" color="primary" disabled />}} />
        </FormControl>
    </search>
  )
}
