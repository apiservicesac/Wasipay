import Header from "@/common/Header";
import { UserDropdownMenu } from './user_dropdown';


export const HeaderLayout = () => {
    return (
        <Header>            
            <UserDropdownMenu />                 
        </Header>
    );
}