import React from 'react';
import TopNavi from "./top/TopNavi";
import BottomNavi from "./bottom/BottomNavi";
import MobileNavi from "./mobile/MobileNavi";

const Navigation = () => {
    return (
        <>
            <TopNavi/>
            <BottomNavi/>
            <MobileNavi/>
        </>
    );
};

export default Navigation;
