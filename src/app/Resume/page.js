import Banner from "@/components/Banner";
import Menu from "@/components/Menu"
import { Typography } from "@mui/material";

export default function page() {
    return (
        <>
            <Menu />
            <Banner title={"Resume"} />
            <p>Insert PDF here</p>
        </>
    );
}