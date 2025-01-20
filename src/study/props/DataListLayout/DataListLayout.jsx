function DataListLayout({children}) {   // {children}: 부모 컴포넌트에서 전달된 하위 요소 props로 접근가능

    console.log(children);

    const liList = [    
        <li>5번 리스트</li>,
        <li>6번 리스트</li>,
        <li>7번 리스트</li>,
        <li>8번 리스트</li>,
    ];
    const liList2 = [    
        <li>5번 리스트</li>,
        <li>6번 리스트</li>,
        <li>7번 리스트</li>,
        <li>8번 리스트</li>,
    ];

    const liList3 = [    
        <li>5번 리스트</li>,
        <li>6번 리스트</li>,
        <li>7번 리스트</li>,
        <li>8번 리스트</li>,
    ];

    

    return <ul>
        {children}
        {liList}

        {
        children.map((li, index) =>     // children를 순회해서 새로운 li요소를 넣어 만들고                                   
            <li key={index}>{"1" + li.props.children}</li>  // 앞자리에 1을 추가해서 렌더링
        )
    }
    {
        liList.map((li, index) => 
            <li key={index}>{"2" + li.props.children}</li>
        )
    }
    </ul>
   
}

export default DataListLayout;