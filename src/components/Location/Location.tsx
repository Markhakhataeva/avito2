import React, {FC} from 'react';
import Iframe from "react-iframe";


interface location{
    item:{
        address:any
    }
}
export const Location:FC<location> = ({item}:location) => {
    return (
        <div style={{ marginTop: "100px" }}>
            <h2>
                Расположение
            </h2>
            <p>
                {item.address}
            </p>
            <Iframe  src={"https://s3-alpha-sig.figma.com/img/e485/8024/900c0b0776df0345a60946ce159ba340?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQ3sbLt-FwTKEh-yhFTgulkOqUwnnk~TR96nxwvCg1GVuGC0V-8P5CJGwiaN5NTMMae6i0J5oej3TTcc29V5CrWAlXnEXAnPFTD5eFJKFcL3Wqi1QEE6hoIT4Ok8nC4hwJ6TchTmBv93WNzDcZecZqDHjD~ttwq5f5~KrZNTewHSPhSFPUigIh7Jr7SW8b~oW27wsWlmvGDHa5LdGAxbFSRHGXBw1OVY2VQbUIpPM~Sqo3ePctS9fCti~gdx7m7Kgzvskc8wJaGmeqKajzIdeK--~qA~5K2X70fVRQLLvvk2cwogN0coSVfoXBy89LS47Faza6bLvlSnqJgzcVX7qA__"}
            width="700" height="500"  loading="lazy" url="" />
        </div>
    );
}

