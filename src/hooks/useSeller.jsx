import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import useProfile from './useProfile';

const useSeller = () => {
    const { user, loading } = useAuth();
    const [userInfo] = useProfile();
    const [axiosSecure] = useAxiosSecure();
    const { data: sellerInfo = {}, refetch, isLoading: isSellerLoading} = useQuery({
        queryKey: ["seller", userInfo?.email],
        enabled: !loading && !!userInfo?.email,
        queryFn: async () => {

            const res = await axiosSecure.get(`/get-seller?email=${userInfo?.email}`)
            return res.data;

        }
    })
    return [sellerInfo, refetch,isSellerLoading]
};

export default useSeller;