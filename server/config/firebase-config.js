import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccountKey = {
  type: "service_account",
  project_id: "chat-app-806fe",
  private_key_id: "dc44d6caaf4233c49ef3d8dd7dae77500e3e0b96",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDSoq3Dgs+cAHE0\ntQ7Bj14h4NshSVVFE1zteaNEfnCokBkGz8xni+P+bCGPTwdi1OVOQ6HgTcMcvD70\nhKB9ULibpseq82EDKS3lQCF8CWJ64wyewPs8mQ0LW48xg++JnfYzD2Fv6PHOK810\nxKqyTui3aCguhcdr4TnuzLgu1CFArOP4QnMNHzhkq0/8VcOYsq/z2jCgvKx1Ovmw\n3mlkwpjM5hsjF4UcbY28W47Kq2tpmE9NK2VO7QDHQ3WvkJSOLWFhj089y/j1bk6J\nr6C6LngSVjWDFUA+r68RhLeeuFyvz6KoAXlYoSd01XU/pL6qZ/nHt4tI0T7RHxF8\nVIuVT1X9AgMBAAECggEAGl9W7UM8Fjax9dzzh4WZThmWpiDF5duqR2ty5zkDhv9f\nuswath48QhcszoIhFR09xqJOKsThuH/TTA8s/vOz4X0sw7ksPNaTkgAJETwlkehK\npLfZ3Pj2uqTQlW0E+VCHSlZTJ01dtSgj1cpn6uJZXdlTKpwCX334IG+OYgKaVTv2\nOfnRMfenI5Y6YLbIkeyWpwN9ixlEoE45g/Wg9Z8h2dkbe5Sl7Qfm8IUdWr965KK5\noktk15XxqFQzEwj8DxGEUUZ1js1mZYsAXTBzqpmsv8128q4iZQwxa8ITlQNoAGee\npm3aAlmyE6oq8wfMxnXU7KtoVJdbs+PrhK4cViT2kQKBgQDq8rEE4mDuWTiE1OVB\nUWzTgvst8EAb/BcGCvGgpNac5PY/2uagyi9tmqj3P0woicYFP9lqL9Ek2fG5WEo7\nta/EwmMm1+2WcWhv37hnPcCq0nB96IFwi2lHlTxMq24WmdH6mviVKaWto7cs8mV3\nike+PB7CQbyX4NP0TUNceOgh2QKBgQDlgkx15TTXLf1JAs6sR+RU+TRaOte0OXgB\nno69EthEcX4omhFNmGXnli0E5lY1kILNbb0U2GtkbYzINGSXVbQug0m1RFjdQLMW\nVPSPw50KhjpV5qMQqmlw9K2lhdyIQ5Vzkshz3MCHRI+fktfsSF5mPZMLcxGV4YBf\nck/IkZ9axQKBgQCSx4G9ymvCHC1KFvMOpn71eNvRLEnw8cG0fbvMn46QQB5zcB8r\nDoUo1TmAFaRPoxr6BpSeWTcw7ZOtNjJSMUSZCNQG3VlJ5pnXYo4CubqXPZcXodzT\n4dSo6tvcDjFdn0VmadCo53bhDumOA/VOBC6j801IEOdwfv4LnwVZTRPAqQKBgC80\n5dU6F+xKoVZrJWd6QhTYTVRh1gxT5cMvgdySC7nIPlLLndOADTXdRdVEK2dJGh52\n+/VVroExp0tmu2oFTtJiXr7SGBUqQavOPZ90dNC9WzJgBhpfcuCw8yagqgO9Ivhq\nsKBkP5WTHJeN9Ku9Fu2grKYmPO+/OlBnitGOYmChAoGAAreQ7t8+hsMMlBIrnC5u\n7g3ZrveJ4jfnRiFWFD7/ts/k8guqB2dGmk/z9p/6x/IKo0I5o0p0sWFjX3qkNjHK\n5z55zr/Dx+ayJS7kTBkuis+5TV0G4x+Xme/b5bBG3n1j2MaZCtml4ZMsSIJGLaQZ\nlSDv5cwfI493AwVDOGhwpE8=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-sof94@chat-app-806fe.iam.gserviceaccount.com",
  client_id: "109992761274729078160",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-sof94%40chat-app-806fe.iam.gserviceaccount.com",
};

const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const auth = getAuth(app);
export default auth;
