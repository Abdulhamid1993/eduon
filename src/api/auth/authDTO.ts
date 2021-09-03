
export interface UserProps {
    readonly phone: string;
    readonly id: string;
    readonly cash: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly image: string;
    readonly own_ref_code: string;
    readonly bonus: number | string
}

export interface CommentsProps {
    readonly user: {
        readonly id: string;
        readonly first_name: string;
        readonly last_name: string;
        readonly image: string;
    };
    readonly data: string;
    readonly comment: string;

}