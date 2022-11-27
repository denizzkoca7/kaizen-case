import CocaColaBg from "../images/cc-bg.svg";
import SpriteBg from "../images/sprite-bg.png";
import ThirdBg from "../images/third-img.jpeg";
import CocaColaSub from "../images/cc-logo.svg";
import SpriteSub from "../images/sprite-sub.svg";
import ThirdSub from "../images/third-sub.png";

const useGetProductData = () => {
  const productItems = [
    {
      id: 1,
      name: "DahaDaha",
      desc: "Coca-Cola Siparişlerinde 15 TL İndirim Getir'de!",
      color: "#F1DE02",
      img: ThirdBg,
      subImg: ThirdSub,
      detailHeader: "Her Altın Kapakta Bir Daha Daha Keyfi",
      detailText: `Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya getirir.  Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer alır.
      Yeni tatlara açık olanların beğenisini kazanan kahveli Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer almaktadır.
      İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir. 
      Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir. `,
    },
    {
      id: 2,
      name: "CocaCola",
      desc: "2,5 LT Coca-Cola kapakları Coca-Cola +Coffee kazandırıyor!",
      color: "#FF0023 ",
      img: CocaColaBg,
      subImg: CocaColaSub,
      detailHeader: "Her Altın Kapakta Bir Coca-Cola + Coffee Keyfi",
      detailText: `Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya getirir.  Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer alır.
      Yeni tatlara açık olanların beğenisini kazanan kahveli Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer almaktadır.
      İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir. 
      Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir. `,
    },
    {
      id: 3,
      name: "Sprite",
      desc: "2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!",
      color: "#009639 ",
      img: SpriteBg,
      subImg: SpriteSub,
      detailHeader: "2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!",
      detailText: `Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya getirir.  Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer alır.
      Yeni tatlara açık olanların beğenisini kazanan kahveli Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer almaktadır.
      İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir. 
      Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir. `,
    },
    {
      id: 4,
      name: "CocaCola",
      desc: "2,5 LT Coca-Cola kapakları Coca-Cola +Coffee kazandırıyor!",
      color: "#FF0023 ",
      img: CocaColaBg,
      subImg: CocaColaSub,
      detailHeader: "Her Altın Kapakta Bir Coca-Cola + Coffee Keyfi",
      detailText: `Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya getirir.  Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer alır.
      Yeni tatlara açık olanların beğenisini kazanan kahveli Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer almaktadır.
      İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir. 
      Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir. `,
    },
    {
      id: 5,
      name: "Sprite",
      desc: "2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!",
      color: "#009639 ",
      img: SpriteBg,
      subImg: SpriteSub,
      detailHeader: "Her Altın Kapakta Bir Coca-Cola + Coffee Keyfi",
      detailText: `Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya getirir.  Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer alır.
      Yeni tatlara açık olanların beğenisini kazanan kahveli Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer almaktadır.
      İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir. 
      Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir. `,
    },
  ];

  return productItems;
};

export default useGetProductData;
