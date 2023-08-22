import { SafeAreaView } from "react-native";

import Topo from "./componentes/Topo";
import Produtores from "./componentes/Produtores";

export default function Home() {
    return (
        <SafeAreaView>
            <Produtores topo={Topo} />
        </SafeAreaView>
    );
}