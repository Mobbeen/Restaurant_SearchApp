import axios from "axios";

export default axios.create({

    baseURL: "https://api.yelp.com/v3/businesses",

    headers: {
    Authorization:
    "Bearer qlgHHbpRZBD8fXHNCiojURWOtrHS5_jHRBsj8oieTyyliv68WN3JNGiqrIGWPltOaefxaVmCuYRt9fqve6IbC9OBHL2xfZtXFrsec2p9EmQgcExMHjTi5C-PhxCvYXYx"
    }
});