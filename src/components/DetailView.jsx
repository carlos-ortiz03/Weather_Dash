import { useParams, Link } from "react-router-dom";

const DetailView = () => {
    const params = useParams();

    return (
        <>
            <h4>Date: {params.date}</h4>
            <h4>Minimum Temperature: {params.min_temp}</h4>
            <h4>Maximum Temperature: {params.max_temp}</h4>
            <h4>Weather Conditions: {params.conditions}</h4>
            <h4>Clouds: {params.description}</h4>
            <Link to="/search">Go Back</Link>
        </>
    )
    
}

export default DetailView;