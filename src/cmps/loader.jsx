import ReactLoading from "react-loading";

export const Loader = () => {
    return (
        <div className="loader">
            <ReactLoading type={"spinningBubbles"} color="#1DBF73" height={'20%'} width={'20%'} />
        </div>
    )
}