interface LogoData {
    icon: string;
    style: string;  
}

export interface CardData { 
    id: string; 
    logo: LogoData; 
    title: string; 
    user_name: string;
    editable: boolean;
}
