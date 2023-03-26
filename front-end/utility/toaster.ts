import { toast } from "react-toastify";


const toaster = (type : string = "error", message : string) => {

    switch(type){

        case "success":
            return toast.success(message);

        case "warn":
            return toast.warn(message);

        case "info":
            return toast.info(message);

        case "error":
            return toast.error(message);

        default:
            return toast.error(message);

    }

}


export default toaster;
