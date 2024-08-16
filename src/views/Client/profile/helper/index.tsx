import { UseLocalContext } from "@/core/context/UseLocalContext";

export const ProfileInfoHelper = () => {
    const { stateUser } = UseLocalContext();

    return {
        stateUser
    }
}