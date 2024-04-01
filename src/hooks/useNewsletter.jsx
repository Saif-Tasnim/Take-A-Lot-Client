import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useNewsletter = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: newsletters = {}, refetch} = useQuery({
        queryKey: ["newsletter-subscriptions", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-newsletter-subscriptions?email=${user?.email}`)
            return res.data;

        }
    })
    return [newsletters, refetch]
};

export default useNewsletter;