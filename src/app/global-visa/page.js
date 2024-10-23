import GlobalVisas from "@/components/GlobalVisas";
import { getAllGlobalVisa } from "@/utils/getApi";

export default async function allVisa(options) {
    const globalVisasData = await getAllGlobalVisa();
    return (
        <GlobalVisas data={globalVisasData?.data}/>
    )
}