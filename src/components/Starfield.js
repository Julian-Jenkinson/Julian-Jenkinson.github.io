import { useState, useEffect, useRef } from 'react';

const Starfield = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate offset from center, normalized to -1 to 1
        const x = (e.clientX - rect.left - centerX) / centerX;
        const y = (e.clientY - rect.top - centerY) / centerY;
        
        setMousePos({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth mouse following with different easing for each layer
  useEffect(() => {
    const smoothing = 0.1;
    const animate = () => {
      setSmoothPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * smoothing,
        y: prev.y + (mousePos.y - prev.y) * smoothing
      }));
    };

    const interval = setInterval(animate, 16); // ~60fps
    return () => clearInterval(interval);
  }, [mousePos]);

  const stars1Positions = "1711px 345px, 257px 1105px, 1764px 877px, 1232px 1103px, 645px 869px, 1089px 1523px, 814px 44px, 893px 1165px, 461px 1996px, 1458px 1483px, 1649px 400px, 994px 1895px, 256px 1723px, 1800px 1184px, 1895px 1439px, 1139px 660px, 1939px 1408px, 511px 745px, 1147px 1419px, 703px 583px, 1392px 430px, 341px 421px, 1613px 1673px, 1971px 341px, 11px 1094px, 57px 44px, 1996px 848px, 1931px 117px, 767px 1039px, 599px 1734px, 310px 1695px, 1876px 792px, 1267px 1455px, 1016px 670px, 817px 204px, 1783px 1362px, 1441px 838px, 931px 1238px, 290px 1404px, 1385px 1595px, 904px 1916px, 351px 606px, 1512px 1822px, 213px 844px, 1212px 827px, 236px 431px, 226px 1098px, 601px 1716px, 1256px 1020px, 313px 1595px, 801px 1459px, 678px 301px, 289px 922px, 1505px 846px, 1665px 4px, 1934px 1018px, 1512px 505px, 585px 1813px, 660px 830px, 195px 461px, 1703px 202px, 462px 1137px, 1419px 431px, 242px 1459px, 1402px 1077px, 1660px 382px, 1277px 1608px, 607px 1317px, 1758px 464px, 1845px 615px, 1705px 1248px, 1209px 758px, 1809px 645px, 1236px 1364px, 1846px 935px, 1509px 1491px, 14px 63px, 790px 405px, 1001px 1346px, 637px 707px, 1152px 827px, 78px 643px, 246px 1263px, 1549px 981px, 745px 1217px, 247px 80px, 1198px 750px, 342px 650px, 595px 769px, 952px 1302px, 161px 1862px, 473px 892px, 1809px 1655px, 1881px 1648px, 1993px 1038px, 647px 1027px, 330px 371px, 1948px 1074px, 1826px 503px, 543px 115px, 1672px 426px, 228px 1423px, 56px 568px, 1919px 1124px, 186px 271px, 1550px 479px, 475px 1752px, 1803px 1914px, 129px 455px, 1335px 1289px, 390px 53px, 531px 1307px, 1055px 929px, 733px 1751px, 1366px 1848px, 672px 753px, 1137px 189px, 1645px 1455px, 1123px 726px, 860px 1909px, 258px 1053px, 706px 1875px, 1968px 112px, 1628px 807px, 849px 1250px, 283px 1962px, 156px 483px, 1899px 801px, 516px 1889px, 1032px 1824px, 718px 1913px, 143px 1509px, 495px 482px, 1963px 1201px, 176px 1580px, 1975px 374px, 485px 1409px, 1396px 459px, 1399px 943px, 238px 710px, 1850px 711px, 26px 1143px, 825px 892px, 561px 488px, 1205px 1735px, 48px 781px, 678px 600px, 1414px 1810px, 455px 1606px, 1935px 57px, 226px 668px, 1997px 503px, 94px 391px, 619px 915px, 1873px 767px, 1985px 234px, 637px 481px, 1748px 591px, 1498px 148px, 1429px 866px, 567px 757px, 1886px 718px, 1108px 1654px, 434px 1157px, 1482px 1677px, 1877px 1386px, 1535px 398px, 419px 1451px, 1764px 839px, 1822px 147px, 446px 712px, 1576px 598px, 479px 1032px, 320px 346px, 1415px 544px, 1921px 1750px, 1541px 863px, 1864px 1428px, 1737px 352px, 1699px 522px, 1481px 548px, 307px 11px, 6px 643px, 838px 5px, 1407px 951px";

  const stars2Positions = "1695px 580px, 236px 881px, 771px 1592px, 100px 550px, 1962px 675px, 448px 607px, 799px 705px, 1683px 642px, 1807px 462px, 906px 942px, 606px 1899px, 834px 825px, 1430px 1985px, 66px 564px, 313px 587px, 1325px 1691px, 1956px 1913px, 1195px 1254px, 1736px 1403px, 872px 1365px, 520px 19px, 1220px 533px, 1924px 1499px, 1190px 905px, 833px 122px, 269px 362px, 1235px 769px, 1568px 835px, 860px 1678px, 507px 1908px, 1505px 1968px, 354px 842px, 1657px 809px, 893px 267px, 290px 984px, 1619px 51px, 3px 461px, 1490px 418px, 1508px 1681px, 1093px 594px, 1935px 1779px, 886px 1615px, 313px 841px, 371px 375px, 594px 417px, 548px 1523px, 393px 1955px, 1780px 1810px, 892px 880px, 230px 1508px, 1044px 1306px, 1705px 1300px, 1861px 1069px, 437px 219px, 1463px 844px, 1194px 3px, 1099px 52px, 843px 53px, 684px 424px, 1910px 1478px, 1417px 291px, 1876px 842px, 1341px 1961px, 494px 248px, 1643px 436px, 1343px 442px, 991px 1888px, 1306px 1639px, 236px 705px, 699px 1318px, 250px 300px, 1740px 1191px, 683px 1610px, 1832px 1912px, 600px 742px, 1109px 619px, 466px 443px, 334px 1593px, 604px 931px, 1363px 1741px, 1080px 68px, 1852px 707px, 1665px 238px, 1174px 1411px, 1353px 576px, 1546px 1153px, 1741px 1184px, 1692px 86px, 1630px 1298px, 1387px 1736px, 207px 1669px, 1352px 1837px, 1386px 1384px, 1524px 1229px, 907px 1788px, 1337px 1653px, 101px 68px, 1423px 579px, 1125px 1041px, 327px 1429px, 529px 934px, 1356px 1033px, 339px 566px, 1312px 314px, 1863px 1309px, 753px 801px, 135px 1172px, 1227px 1567px, 1565px 505px, 1921px 18px, 221px 1132px, 297px 641px, 808px 683px, 1680px 1664px, 738px 526px, 627px 436px, 237px 718px, 236px 599px, 1828px 1250px, 1762px 1818px, 1310px 1470px, 1557px 422px, 742px 590px, 1591px 419px, 231px 1709px, 801px 100px, 460px 1745px, 1434px 563px, 59px 191px, 1432px 605px, 1340px 947px, 1611px 407px, 1202px 553px, 1999px 72px, 762px 910px, 1838px 1177px, 1085px 1563px, 1779px 770px, 140px 288px, 735px 829px, 1686px 152px, 96px 1501px, 420px 1735px, 1428px 1899px, 1893px 20px, 1902px 1607px, 856px 1212px, 459px 853px, 1217px 1719px, 24px 691px, 453px 1156px, 1305px 689px, 393px 300px, 319px 1288px, 263px 517px, 577px 924px, 228px 201px, 72px 1941px, 976px 1644px, 157px 1251px, 1397px 1466px, 147px 981px, 204px 922px, 519px 1082px, 532px 1031px, 968px 1851px, 1746px 69px, 389px 1573px, 123px 1948px, 79px 202px, 1787px 1659px, 377px 368px, 360px 969px, 1017px 1821px, 671px 1505px, 1374px 515px, 465px 1217px, 974px 602px, 386px 959px, 845px 14px, 154px 1866px, 314px 1313px, 1474px 1544px, 1221px 290px, 437px 1124px, 651px 707px, 743px 40px, 642px 232px, 943px 881px, 686px 190px, 39px 676px, 1434px 1468px, 690px 726px, 166px 1649px, 1941px 1356px, 982px 828px, 1620px 770px, 1424px 1841px, 1316px 718px, 121px 1635px";

  const stars3Positions = "765px 1886px, 1525px 1098px, 1670px 407px, 911px 163px, 1971px 1489px, 970px 1907px, 1598px 1440px, 1501px 752px, 395px 1478px, 1825px 706px, 1238px 61px, 1428px 1224px, 1877px 837px, 1221px 1006px, 991px 790px, 462px 653px, 834px 1940px, 929px 1632px, 656px 1397px, 651px 320px, 907px 66px, 518px 48px, 787px 1816px, 1856px 700px, 875px 855px, 1445px 630px, 1981px 1984px, 1659px 790px, 293px 382px, 1662px 106px, 1097px 1714px, 523px 745px, 649px 73px, 508px 1267px, 1269px 1045px, 1989px 1582px, 1989px 1540px, 617px 889px, 1568px 1939px, 476px 1720px, 1825px 1418px, 1384px 76px, 1768px 658px, 219px 596px, 1354px 860px, 1657px 1219px, 1595px 604px, 1395px 1940px, 164px 1879px, 886px 1680px, 333px 1673px, 319px 1687px, 532px 854px, 1104px 1995px, 822px 1677px, 1865px 776px, 1983px 1189px, 270px 839px, 34px 286px, 1647px 1192px, 190px 287px, 1506px 510px, 1981px 1949px, 457px 1290px, 1761px 998px, 1951px 1056px, 1788px 1929px, 1000px 1592px, 441px 407px, 739px 493px, 1201px 161px, 963px 158px, 1683px 1003px, 1649px 190px, 857px 1519px, 240px 442px, 1177px 725px, 1167px 545px, 790px 837px, 1619px 1518px, 140px 1863px, 502px 1064px, 863px 560px, 820px 398px, 1374px 834px, 1285px 1250px, 918px 1863px, 1111px 1610px, 855px 1113px, 1193px 1112px, 1367px 640px, 372px 722px, 661px 1335px, 293px 793px, 1615px 229px, 261px 1400px, 1683px 1206px, 1617px 467px, 1569px 1323px, 684px 1203px";

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen overflow-hidden relative cursor-none"
      style={{
        background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'
      }}
    >
      {/* Layer 1 - Smallest, fastest stars */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${smoothPos.x * 30}px, ${smoothPos.y * 30}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div
          className="absolute"
          style={{
            width: '0.7px',
            height: '0.7px',
            background: 'transparent',
            boxShadow: stars1Positions.split(', ').map(pos => `${pos} #FFF`).join(', ')
          }}
        />
      </div>

      {/* Layer 2 - Medium stars, medium speed */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${smoothPos.x * 20}px, ${smoothPos.y * 20}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <div
          className="absolute"
          style={{
            width: '1.2px',
            height: '1.2px',
            background: 'transparent',
            boxShadow: stars2Positions.split(', ').map(pos => `${pos} #FFF`).join(', ')
          }}
        />
      </div>

      {/* Layer 3 - Largest, slowest stars */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${smoothPos.x * 10}px, ${smoothPos.y * 10}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div
          className="absolute"
          style={{
            width: '1.7px',
            height: '1.7px',
            background: 'transparent',
            boxShadow: stars3Positions.split(', ').map(pos => `${pos} #FFF`).join(', ')
          }}
        />
      </div>

      {/* Optional: Mouse cursor indicator */}
      <div 
        className="absolute w-1 h-1 bg-white/20 rounded-full pointer-events-none transition-all duration-100 ease-out"
        style={{
          left: `${(smoothPos.x + 1) * 50}%`,
          top: `${(smoothPos.y + 1) * 50}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
};

export default Starfield;