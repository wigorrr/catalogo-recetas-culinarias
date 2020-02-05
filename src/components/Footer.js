import React from "react";
import "../styles/style.css";
import Logo from "../img/logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import appStoreBadge from "../img/appStoreBadge.svg";
import googlePlayBadge from "../img/googlePlayBadge.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="container-fluid">
        <div className="row Layout">
          <section className="col col-12 col-sm-4 col-lg-3 footer-header__redes">
            <a href="https://www.facebook.com/lanacion" target="_blank">
              <FacebookIcon className="mr-5" />
            </a>
            <a href="https://twitter.com/lanacion" target="_blank">
              <TwitterIcon className="mr-5" />
            </a>
            <a href="https://www.instagram.com/lanacioncom/" target="_blank">
              <InstagramIcon className="mr-5" />
            </a>
            <a
              href="http://servicios.lanacion.com.ar/herramientas/rss/ayuda"
              target="_blank"
            >
              <RssFeedIcon />
            </a>
          </section>
          <section className="col col-sm-4 col-lg-6 footer-header__logo">
            <a href="https://www.lanacion.com.ar/">
              <img src={Logo} alt="Logo La Nación" />
            </a>
          </section>
          <section className="col col-12 col-sm-4 col-lg-3 footer-header__app">
            <a
              className="svgbadges"
              href="https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419"
            >
              <img src={googlePlayBadge} alt="Google Play" />
            </a>
            <a
              className="svgbadges"
              href="https://apps.apple.com/ar/app/la-nacion/id410689702"
            >
              <img src={appStoreBadge} alt="App Store" />
            </a>
          </section>
        </div>
        <div class="row footer-sitio">
          <section class="col-sm-9 col-xl-8 footer-sitio__links">
            <a
              href="http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html"
              class="item_link"
            >
              Mapa del sitio
            </a>
            <a href="https://micuenta.lanacion.com.ar/ayuda" class="item_link">
              Ayuda
            </a>
            <a href="https://micuenta.lanacion.com.ar/tyc" class="item_link">
              Términos y condiciones
            </a>
            <a href="https://www.lanacion.in/#/" class="item_link">
              ¿Cómo anunciar?
            </a>
            <a
              href="https://suscripciones.lanacion.com.ar/suscribirme/"
              class="item_link"
            >
              Suscribirse al diario impreso
            </a>
          </section>
          <section class="col-sm-3 col-xl-4 footer-sitio__captcha">
            <p>
              Protegido por re CAPTCHA:{" "}
              <a
                href="https://policies.google.com/terms?hl=es-419"
                target="_blank"
                class="condition"
              >
                Condiciones
              </a>{" "}
              <a
                href="https://policies.google.com/privacy?hl=es-419"
                target="_blank"
                class="private"
              >
                Privacidad
              </a>
            </p>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
