import Hello from "./Hello/Hello";
import HHH from "./Hello2/Hello2";
import Hello3 from "./Hello3/Hello3";
import TextInput from "./props/TextInput/TextInput";
import DataListLayout from "./props/DataListLayout/DataListLayout";
import DataListLayout2 from "./props/DataListLayout2/DataListLayout2";

function App() {

    return (

        <>
            <Hello />
            <HHH />
            <Hello3 />
            <TextInput id="name" text="이름" />
            <TextInput id="age" text="나이" />
            <TextInput id="address" text="주소" />
            <TextInput id="dender" text="성별" />
            <DataListLayout>
                <li>1번 리스트</li>
                <li>2번 리스트</li>
                <li>3번 리스트</li>
                <li>4번 리스트</li>
            </DataListLayout>
            <DataListLayout2 dataList={ [1, 2, 3, 4, 5] }/>
        </>
    )
}

export default App;