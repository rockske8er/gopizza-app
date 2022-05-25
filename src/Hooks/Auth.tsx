import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Auth from "@react-native-firebase/auth";
import Firestore from "@react-native-firebase/firestore";

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type AuthContextDataProps = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  isLogging: boolean;
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextDataProps);

const USER_COLLECTION = "@gopizza:users";

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogging, setisLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert("Login", "Informe E-mail ou Senha Correta!");
    }

    setisLogging(true);

    Auth()
      .signInWithEmailAndPassword(email, password)
      .then((account) => {
        console.log(account);

        Firestore()
          .collection("users")
          .doc(account.user.uid)
          .get()
          .then(async (profile) => {
            const { name, isAdmin } = profile.data() as User;

            if (profile.exists) {
              const data = {
                id: account.user.uid,
                name,
                isAdmin,
              };

              await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(data));
              setUser(data);
            }
          })
          .catch(() =>
            Alert.alert(
              "Login",
              "Não foi possivel encontrar os dados do usuário"
            )
          );
      })
      .catch((error) => {
        const { code } = error;

        console.log(code);

        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          return Alert.alert("Login", "Email ou Senha Invalidos");
        } else {
          return Alert.alert("Login", "Error ao Logar");
        }
      })
      .finally(() => setisLogging(false));
  };

  const signOut = async () => {
    Auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  };

  const forgotPassword = async (email: string) => {
    setisLogging(true);
    if (!email) {
      return Alert.alert("Redefinir Senha", "Email Invalido");
    }

    Auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          "Redefinier Senha",
          "Enviamos para seu email para resetar sua senha "
        )
      )
      .catch(() =>
        Alert.alert("Redefinir Senha", "Não foi possivel enviar o email")
      );

    setisLogging(false);
  };

  const loadUserStorage = async () => {
    setisLogging(true);
    const storagedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storagedUser) {
      const data = JSON.parse(storagedUser) as User;
      console.log(data);
      setUser(data);
    }

    setisLogging(false);
  };

  useEffect(() => {
    loadUserStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogging,
        signIn,
        signOut,
        user,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
