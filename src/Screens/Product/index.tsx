import React, { useState } from "react";
import { Alert, Platform } from "react-native";
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

const Product = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priceSizeP, setPriceSizeP] = useState("");
  const [priceSizeM, setPriceSizeM] = useState("");
  const [priceSizeG, setPriceSizeG] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      .then(() => Alert.alert("Cadastro", "Cadastrado com sucesso"))
      .catch(() => Alert.alert("Cadastro", "nao foi possivel com sucesso"))
      .finally(() => setIsLoading(false));
  };

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <BackButton />
          <Title>Cadastrar</Title>
          <DeleteButton>
            <DeleteButtonLabel>Deletar</DeleteButtonLabel>
          </DeleteButton>
        </Header>

        <Upload>
          <Photo uri={image} />
          <PickImageButton
            title="Carregar"
            type="secondary"
            onPress={handlePickerImage}
          />
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

          <Button
            title="Cadastrar pizza"
            isLoading={isLoading}
            onPress={handleAdd}
          />
        </Form>
      </ScrollView>
    </Container>
  );
};

export { Product };
