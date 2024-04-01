import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useSeller from '../hooks/useSeller';

const SellerRouter = ({children}) => {
    const [sellerInfo, refetch,isSellerLoading] = useSeller();
    const{user,loading} = useAuth();
    const navigate = useNavigate();

    if(loading || isSellerLoading){
        return <h1>Loading</h1>
    }
    if(user && sellerInfo?.status === "approved"){
        return children;
    }
    return navigate("/")
};

export default SellerRouter;