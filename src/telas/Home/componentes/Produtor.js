import { Text, View, Image, StyleSheet} from "react-native";

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    return (
        <View style={styles.cartao}>
            <Image source={imagem} accessibilityLabel={nome}  style={styles.imagem} />
            <View style={styles.informacoes}>
              <Text style={styles.nome}>{ nome }</Text>
              <Text style={styles.distancia}>{ distancia }</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    cartao: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold"
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    }
})