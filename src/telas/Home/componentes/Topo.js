import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import logoTopo from "../../../../assets/logo.png";

import { carregaTopo } from "../../../servicos/carregaDados";


class Topo extends React.Component {

    atualizaTopo () {
        const retorno = carregaTopo();
    }

    componentDidMount () {
        this.atualizaTopo();
    }

    render() {
        return (
            <View style={styles.topo}>
              <Image source={logoTopo} style={styles.imagem} />  
              <Text style={styles.boasVindas}>Olá, Matheus Lima</Text>
              <Text style={styles.legenda}>Encontre os melhores produtores</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26
    }
});

export default Topo