import { useEffect } from "react";
import { useState } from "react";
import { subscriptionPlanServices } from "../services/subscriptionPlanService";

export function useSubscriptionPlans() {

    const [formOptions, setFormOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getFormOptions = async () => {
        const response = await subscriptionPlanServices.create();
        setFormOptions(response.data);
        
        setIsLoading(false);
    }

    useEffect(() => {
        getFormOptions();
    }, []);

    return {
        formOptions,
        isLoading,
    }
}
