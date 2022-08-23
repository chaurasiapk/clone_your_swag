
import { TopPage } from "../topPage/topPage";
import { BrandChooser } from "../brandChooser/brandChooser";
import { Catlog } from "../catlog/catlog";
import { FitForYou } from "../fitforyou/fitforyou";

import { Testimonial } from "../testimonial/testimonial";
import { Footer } from "../footer/footer";




export const Home =()=>{

        return(
            <div>
                <TopPage />
                <BrandChooser />
                <Catlog />
                <FitForYou />
                <Testimonial />
                <Footer />
            </div>

        )


}
