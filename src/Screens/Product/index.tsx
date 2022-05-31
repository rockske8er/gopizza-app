import React, { useEffect, useState } from "react";
import { Alert, Platform, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Firestore from "@react-native-firebase/firestore";
import Storage from "@react-native-firebase/storage";

import {
  Container,
  Header,
  Title,
  DeleteButton,
  DeleteButtonLabel,
  Upload,
  PickImageButton,
  Form,
  Label,
  InputGroup,
  InputGroupHeader,
  MaxCharcteres,
} from "./styles";

import { InputPrice } from "@Components/InputPrice";
import { Input } from "@Components/Input";
import { Button } from "@Components/Button";
import { BackButton } from "@Components/BackButton";
import { Photo } from "@Components/Photo";
import { ProductProps } from "@Components/ProductCard";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ProductNavigationProps } from "@Types/navigation";

type PizzaResponse = ProductProps & {
  photo_path: string;
  photo_url: string;
  price_size: {
    p: string;
    m: string;
    g: string;
  };
};

const Product = () => {
  const [photoPath, setPhotoPath] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priceSizeP, setPriceSizeP] = useState("");
  const [priceSizeM, setPriceSizeM] = useState("");
  const [priceSizeG, setPriceSizeG] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute();
  const { goBack, navigate } = useNavigation();
  const { id } = route.params as ProductNavigationProps;

  const handleGoBack = () => {
    goBack();
  };

  const handlePickerImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });

      if (!data.cancelled) {
        const urlImage = data.uri;
        setImage(urlImage);
      }
    }
  };

  const handleAdd = async () => {
    if (!name) return Alert.alert("Cadastro", "Informe o nome do produto!!");
    if (!description)
      return Alert.alert("Cadastro", "Informe a descrição do produto!!");
    if (!priceSizeP || !priceSizeM || !priceSizeG)
      return Alert.alert("Cadastro", "Informe o valor dos tamanhos da pizza!!");

    setIsLoading(true);

    const filename = new Date().getTime();
    const referenceImage = Storage().ref(`/pizzas/${filename}.png`);
    await referenceImage.putFile(image);
    const photoUrl = await referenceImage.getDownloadURL();

    Firestore()
      .collection("pizzas")
      .add({
        name,
        name_insensitive: name.toLocaleLowerCase().trim(),
        description,
        price_size: {
          p: priceSizeP,
          m: priceSizeM,
          g: priceSizeG,
        },
        photo_url: photoUrl,
        photo_path: referenceImage.fullPath,
      })
      .then(() => {
        navigate("home");
      })
      .catch(() => Alert.alert("Cadastro", "nao foi possivel com sucesso"))
      .finally(() => setIsLoading(false));
  };

  const handleRemove = () => {
    Firestore()
      .collection("pizzas")
      .doc(id)
      .delete()
      .then(() => {
        Storage()
          .ref(photoPath)
          .delete()
          .then(() => navigate("home"));
      });
  };

  useEffect(() => {
    if (id) {
      Firestore()
        .collection("pizzas")
        .doc(id)
        .get()
        .then((response) => {
          const product = response.data() as PizzaResponse;
          setName(product.name);
          setImage(product.photo_url);
          setDescription(product.description);
          setPriceSizeP(product.price_size.p);
          setPriceSizeM(product.price_size.m);
          setPriceSizeG(product.price_size.g);
          setPhotoPath(product.photo_path);
        });
    }
  }, [id]);

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <BackButton onPress={handleGoBack} />
          <Title>{id ? name : "Cadastrar"}</Title>

          {!id ? (
            <View style={{ width: 20 }} />
          ) : (
            <DeleteButton onPress={handleRemove}>
              <DeleteButtonLabel>Deletar</DeleteButtonLabel>
            </DeleteButton>
          )}
        </Header>

        <Upload>
          <Photo uri={image} />
          {!id && (
            <PickImageButton
              title="Carregar"
              type="secondary"
              onPress={handlePickerImage}
            />
          )}
        </Upload>

        <Form>
          <InputGroup>
            <Label>Nome</Label>
            <Input value={name} onChangeText={setName} />
          </InputGroup>

          <InputGroup>
            <InputGroupHeader>
              <Label>Descriçao</Label>
              <MaxCharcteres>0 de 60 Caracteres</MaxCharcteres>
            </InputGroupHeader>
            <Input
              multiline
              maxLength={80}
              style={{ height: 80 }}
              value={description}
              onChangeText={setDescription}
            />
          </InputGroup>

          <InputGroup>
            <Label>Tamanhos {"e"} Preços</Label>
            <InputPrice
              size="P"
              value={priceSizeP}
              onChangeText={setPriceSizeP}
            />
            <InputPrice
              size="M"
              value={priceSizeM}
              onChangeText={setPriceSizeM}
            />
            <InputPrice
              size="G"
              value={priceSizeG}
              onChangeText={setPriceSizeG}
            />
          </InputGroup>

          {!id && (
            <Button
              title="Cadastrar pizza"
              isLoading={isLoading}
              onPress={handleAdd}
            />
          )}
        </Form>
      </ScrollView>
    </Container>
  );
};

export { Product };
