

export interface IButton {
    children?: React.ReactNode
    type: "button" | "submit";
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    secondary?: boolean;
    fullWidth?: boolean;
    onMouseMove?: (event: any) => void;
}

export type ProjectDetailsType = {
    pName: string;
    pImage: string;
    backgroundLayout: string;
    PCategory: String;
    pLink: string
}[]

export type InputType = {
    type?: string;
    number: number;
    name: string;
    heading: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    userValue: string
    textArea?: boolean
}

export type UserType = {
    userName: string;
    userEmail: string;
    userOrganization: string;
    userMessage: string;
}


// ============== INTERFACE =============

export interface IProps {
    linkName: string;
    fontSize?: number
    onClick?: () => void
}
