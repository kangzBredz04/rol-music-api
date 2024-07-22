import express from "express";
import "dotenv/config";
import cors from "cors";

const albums = [
  {
    id: 1,
    artist: "Geisha",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/db/63/15/db6315b5-0745-31ec-84a4-d0dd3b4c5f08/24UMGIM63169.rgb.jpg/316x316bf.webp",
    title: "Love Recalls - EP",
    embed: "https://embed.music.apple.com/id/album/love-recalls-ep/1751668654",
  },
  {
    id: 2,
    artist: "lightcraft",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/33/01/51/33015160-063d-9a9a-c968-7e0d5d50cd22/198588438022.jpg/316x316bb.webp",
    title: "Hope + Love: reanimated edition",
    embed:
      "https://embed.music.apple.com/id/album/hope-love-reanimated-edition/1753144102",
  },
  {
    id: 3,
    artist: "Juicy Luicy",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/26/0c/be/260cbe21-9d2d-a2ab-3391-f8fde6ad6840/198704005169_Cover.jpg/316x316bb.webp",
    title: "Nonfiksi",
    embed: "https://embed.music.apple.com/id/album/nonfiksi/1749497820",
  },
  {
    id: 4,
    artist: "Mentari Novel",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/07/62/03/0762033e-fb83-b4de-c23e-196f64b206e5/cover.jpg/316x316bb.webp",
    title: "That Girl",
    embed: "https://embed.music.apple.com/id/album/that-girl/1750471186",
  },
  {
    id: 5,
    artist: "Jalaran Sadrah",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f2/af/54/f2af542d-8ee7-1054-4c31-494db67a9467/859788962815_cover.jpg/316x316bb.webp",
    title: "Barasuara",
    embed: "https://embed.music.apple.com/id/album/jalaran-sadrah/1750878130",
  },
  {
    id: 6,
    artist: "Bisma Karisma",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/67/72/b4/6772b463-02fe-ad73-75ac-653660419e2e/cover.jpg/316x316bb.webp",
    title: "Rihlah",
    embed: "https://embed.music.apple.com/id/album/rihlah/1750679311",
  },
  {
    id: 7,
    artist: "Gonggo Sound - EP",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/36/e3/2c/36e32c45-4d4d-5a8f-9182-a60f6e4a5ca9/cover.jpg/316x316bb.webp",
    title: "Texpack",
    embed: "https://embed.music.apple.com/id/album/gonggo-sound-ep/1747684982",
  },
  {
    id: 8,
    artist: "Nadhif Basalamah",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/bb/57/44bb57de-c25d-645b-d8c7-da5aaca0ef43/cover.jpg/316x316bb.webp",
    title: "Nadhif",
    embed: "https://embed.music.apple.com/id/album/nadhif/1749127699",
  },
  {
    id: 9,
    artist: "Bernadya",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/66/6a/4f/666a4fea-8c4e-8021-eb0a-f29f210239be/Jobbd5caf9d-745e-4c37-97e5-950f6dcaea84-169276698-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_329442602_1790121659-Time1717350527124.png/316x316bb.webp",
    title: "Sialnya, Hidup Harus Tetap Berjalan",
    embed:
      "https://embed.music.apple.com/id/album/sialnya-hidup-harus-tetap-berjalan/1749876880",
  },
  {
    id: 10,
    artist: "Afgan",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7e/d5/8f/7ed58f7d-d42a-1132-549c-8e5436ea1125/197342651318_cover.jpg/316x316bb.webp",
    title: "Sonder - EP",
    embed: "https://embed.music.apple.com/id/album/sonder-ep/1751778162",
  },
  {
    id: 11,
    artist: "D`MASIV",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/50/c7/05/50c70557-dcc3-16be-59c4-1f71e6320f34/24UMGIM47804.rgb.jpg/316x316bb.webp",
    title: "8",
    embed: "https://embed.music.apple.com/id/album/8/1743672419",
  },
  {
    id: 12,
    artist: "BAALE",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e4/63/09/e463090a-82cd-86e7-50aa-4a3f0ddb3229/cover.jpg/316x316bb.webp",
    title: "Fortuna",
    embed: "https://embed.music.apple.com/id/album/fortuna/1746658252",
  },
  {
    id: 13,
    artist: "Dongker",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b0/f1/1a/b0f11a67-7f32-0337-71b1-fffc84cead75/196922981128_Cover.jpg/316x316bb.webp",
    title: "Ceriwis Necis",
    embed: "https://embed.music.apple.com/id/album/ceriwis-necis/1746551711",
  },
  {
    id: 14,
    artist: "Cresensia Naibaho",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ae/05/7f/ae057fb5-e21e-edbd-7121-17cc780ffe07/artwork.jpg/316x316bb.webp",
    title: "Cherish in Samba",
    embed: "https://embed.music.apple.com/id/album/cherish-in-samba/1746963634",
  },
  {
    id: 15,
    artist: "Ringgo 5",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7b/a0/6e/7ba06e67-1c45-b045-37e3-32d838f01a2e/090387880388.png/316x316bb.webp",
    title: "Love & Light",
    embed: "https://embed.music.apple.com/id/album/love-light/1744593085",
  },
  {
    id: 16,
    artist: "Pendarra",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/14/a1/15/14a115ef-75a5-f915-66fd-0435f8616ad3/796728352629.png/316x316bb.webp",
    title: "Ode Matahari",
    embed: "https://embed.music.apple.com/id/album/ode-matahari/1745647513",
  },
  {
    id: 17,
    artist: "Sal Priadi",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/81/58/09/815809fa-98b7-76dc-2a42-8c4b088b3aa0/Jobac2341fb-aea6-416c-a312-2095fb09118e-168405272-PreviewImage_preview_image_nonvideo_sdr-Time1716225856888.png/316x316bb.webp",
    title: "MARKERS AND SUCH PENS FLASHDISKS",
    embed:
      "https://embed.music.apple.com/id/album/markers-and-such-pens-flashdisks/1737266457",
  },
  {
    id: 18,
    artist: "CVX",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bc/4b/3d/bc4b3df5-56db-597c-e91b-3d8eca0e4881/5021732367822.jpg/316x316bb.webp",
    title: "FRACTURE",
    embed: "https://embed.music.apple.com/id/album/fracture/1744115768",
  },
  {
    id: 19,
    artist: "Niki",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/69/b4/57/69b457a6-fa84-a2bc-d832-021f31e57410/Job9a2d2903-bcec-4559-8f6d-a36118df6674-168218778-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_327220226_1771962713-Time1715934042985.png/316x316bb.webp",
    title: "Buzz",
    embed: "https://embed.music.apple.com/id/album/buzz/1741576136",
  },
  {
    id: 20,
    artist: "Jevin Julian",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d5/f7/56/d5f756e0-b252-b6b0-c4cf-30e21f9a3e80/5021732342652.jpg/316x316bb.webp",
    title: "i will, i`m sure",
    embed: "https://embed.music.apple.com/id/album/i-will-im-sure/1742523261",
  },
  {
    id: 21,
    artist: "Suara Kayu",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/99/72/aa/9972aae1-78a6-d539-ed99-4c7ab75577d9/5021732423931.jpg/316x316bb.webp",
    title: "Banyak Canda, Tapi Serius",
    embed:
      "https://embed.music.apple.com/id/album/banyak-canda-tapi-serius/1755352376",
  },
  {
    id: 22,
    artist: "NonaRia",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ce/92/dd/ce92dd98-d861-d146-123a-5cb160d830bc/8994925316747.png/316x316bb.webp",
    title: "Dengarkanlah Radio",
    embed:
      "https://embed.music.apple.com/id/album/dengarkanlah-radio/1754901074",
  },
  {
    id: 23,
    artist: "The Jansen",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6f/dc/ad/6fdcad54-7125-7341-8d7a-0211f7ddfae9/5063501184384_cover.jpg/316x316bb.webp",
    title: "Durja Bersahaja",
    embed: "https://embed.music.apple.com/id/album/durja-bersahaja/1754951099",
  },
  {
    id: 24,
    artist: "MALIQ & D`Essensitals",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a0/13/61/a0136197-e360-e5fc-427b-eaeacc3fa862/5021732381811.jpg/316x316bb.webp",
    title: "CAN MACHINES FALL IN LOVE?",
    embed:
      "https://embed.music.apple.com/id/album/can-machines-fall-in-love/1746334964",
  },
  {
    id: 25,
    artist: "Fabio Asher",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/98/3a/6b/983a6b87-c7d6-545a-580c-4ecd6e52af31/796728416406.png/316x316bb.webp",
    title: "Everlast",
    embed: "https://embed.music.apple.com/id/album/everlast/1745634066",
  },
  {
    id: 26,
    artist: "Natasya Elvira",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/03/9a/24/039a245d-af53-a79a-5633-ee504e9562aa/artwork.jpg/316x316bb.webp",
    title: "Cinema",
    embed: "https://embed.music.apple.com/id/album/cinema/1749357091",
  },
  {
    id: 27,
    artist: "Dongker",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b0/f1/1a/b0f11a67-7f32-0337-71b1-fffc84cead75/196922981128_Cover.jpg/316x316bb.webp",
    title: "Ceriwis Necis",
    embed: "https://embed.music.apple.com/id/album/ceriwis-necis/1746551711",
  },
  {
    id: 28,
    artist: "cellosux",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4f/8d/b1/4f8db154-988f-7083-41f1-328827bfb152/090387991183.png/316x316bb.webp",
    title: "Sorry for Everything Goodbye Forever",
    embed:
      "https://embed.music.apple.com/id/album/sorry-for-everything-goodbye-forever/1744551092",
  },
  {
    id: 29,
    artist: "Ardhito Pramono",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d3/2d/b9/d32db91c-8de3-9fc8-f04c-526514562e21/cover.jpg/316x316bb.webp",
    title: "Roadtrip",
    embed: "https://embed.music.apple.com/id/album/roadtrip/1744543153",
  },
  {
    id: 30,
    artist: "Clever Moose",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fb/31/bb/fb31bbc1-efb8-b8e3-d7fe-0961e747b2de/cover.jpg/316x316bb.webp",
    title: "Mediterranean Fuzz",
    embed:
      "https://embed.music.apple.com/id/album/mediterranean-fuzz/1738070289",
  },
  {
    id: 31,
    artist: "skandal",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/dd/90/9b/dd909b76-2605-af5e-10e2-29fdb9d577d0/cover.jpg/316x316bb.webp",
    title: "Dengar - EP",
    embed: "https://embed.music.apple.com/id/album/dengar-ep/1740124208",
  },
  {
    id: 32,
    artist: "JKT48",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/21/24/cd/2124cdda-637f-9992-2ced-077341164ab9/cover.jpg/316x316bb.webp",
    title: "Special Stage Banzai",
    embed:
      "https://embed.music.apple.com/id/album/special-stage-banzai/1736669379",
  },
  {
    id: 33,
    artist: "The Lantis",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b0/f1/1a/b0f11a67-7f32-0337-71b1-fffc84cead75/196922981128_Cover.jpg/316x316bb.webp",
    title: "Pancarona",
    embed: "https://embed.music.apple.com/id/album/pancarona/1733730997",
  },
  {
    id: 34,
    artist: "Ghea Indrawati",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/d6/01/bf/d601bfb1-2c70-f9cd-2af9-4fcc14658147/cover.jpg/316x316bb.webp",
    title: "Berdamai",
    embed: "https://embed.music.apple.com/id/album/berdamai/1731790487",
  },
  {
    id: 35,
    artist: "Aziz Hendra",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c3/49/12/c349120f-fe9e-47be-2ddf-dbc6d1804a81/196871889803.jpg/316x316bb.webp",
    title: "Lesson - EP",
    embed: "https://embed.music.apple.com/id/album/lesson-ep/1732992009",
  },
  {
    id: 36,
    artist: "Sheryl Sheinafia",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e4/8a/e6/e48ae6cd-b787-6a2d-a957-468f370edf42/cover.jpg/316x316bb.webp",
    title: "i am done with you",
    embed:
      "https://embed.music.apple.com/id/album/i-am-done-with-you/1732398652",
  },
  {
    id: 37,
    artist: "LAIR",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/de/93/8c/de938c1a-1403-f9a6-91b8-12855e77eee7/859784043495_cover.jpg/316x316bb.webp",
    title: "Ngélar",
    embed: "https://embed.music.apple.com/id/album/ng%C3%A9lar/1730198901",
  },
  {
    id: 38,
    artist: "Sunwich",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/99/7f/f9/997ff9d1-0e99-c663-2e66-0e6af59b7780/cover.jpg/316x316bb.webp",
    title: "Apophenia",
    embed: "https://embed.music.apple.com/id/album/apophenia/1728893776",
  },
  {
    id: 39,
    artist: "Aruma",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/55/83/ed/5583ed03-b0ed-9a87-3b61-1dcfef6c7b94/196871852067.jpg/316x316bb.webp",
    title: "Bertumbuh - EP",
    embed: "https://embed.music.apple.com/id/album/bertumbuh-ep/1731959844",
  },
  {
    id: 40,
    artist: "Jangar",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/98/b3/a6/98b3a6bf-66e7-3c0a-8603-935fb332082b/cover.jpg/316x316bb.webp",
    title: "Malam - EP",
    embed: "https://embed.music.apple.com/id/album/malam-ep/1726332949",
  },
];

const artist = [
  {
    id: 1,
    name: "Nadhif Basalamah",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTzyPV2WArXQFUJDCurG8uOHAwBgDZ7zt4_zf78PeYz0QHcUoQP",
    embed:
      "https://open.spotify.com/embed/artist/6UgERnTHmjk3qXM9x5vzyO?utm_source=generator",
  },
  {
    id: 2,
    name: "Vionita",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNjJdLYerMD_PqZK7CzY5DCICBA0QibzXbXQ3nQSvAm0Y8lDa8",
    embed:
      "https://open.spotify.com/embed/artist/2dyCbip3jAVmQNAs7Sg8Y9?utm_source=generator",
  },
  {
    id: 3,
    name: "Adrian Khalif",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAaStk4SK9tge5AhZXC7yagP58P_HiLJL6AOhIz4PLRSBmMXzs",
    embed:
      "https://open.spotify.com/embed/artist/6X28gNASnalAWseUA8uI4X?utm_source=generator",
  },
  {
    id: 4,
    name: "Bilal Indra Jaya",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAVPCMGHSfaTF5NmfELioWCn78fGhswATCS1zS-5m_LkCfMbJu",
    embed:
      "https://open.spotify.com/embed/artist/4OqbMdJwZnREH8Kc3pi0De?utm_source=generator",
  },
  {
    id: 5,
    name: "Natania Karin",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTo_5mP8n43HyDvYFGZK2GxM86Rd6v1DdEQOfRMDapCsldoAZj7",
    embed:
      "https://open.spotify.com/embed/artist/4HtAIvJXDROCWO5Bb9dL9d?utm_source=generator",
  },
  {
    id: 6,
    name: "Umay Shahab",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumM6thcad1YeJosr8j0DEja4SS2dtIaJf2kgw_cxgYV-aGAj5",
    embed:
      "https://open.spotify.com/embed/artist/1Mupz2Po4xVP1xQL8yPDGa?utm_source=generator",
  },
  {
    id: 7,
    name: "Batas Senja",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZsMqkKjCpkCW6yJifVjrB662wkaVx7MAarflmSMhsJMtcjfaE",
    embed:
      "https://open.spotify.com/embed/artist/4AhHkaGz7W2bKKJK90IaV2?utm_source=generator",
  },
  {
    id: 8,
    name: "Anggi Marito",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT0vHRlh6aZ44y-mCZJBHpUXB-gxwi_H3xIJXSat4uBsn-WX8Bg",
    embed:
      "https://open.spotify.com/embed/artist/1JvbNeV9zG9Sew1JyaWsyx?utm_source=generator",
  },
  {
    id: 9,
    name: "Dudy Oris",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRk87hw1veVjkP5YD2BtiECehpb-cPiZuIfUl4FfLDWX7ZYhTYi",
    embed:
      "https://open.spotify.com/embed/artist/6YPfs6tdZXvnlzgZNU3SYT?utm_source=generator",
  },
  {
    id: 10,
    name: "Ghea Indrawati",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRS9A7lhxZDWx5x7AzA_0KC16vacipxJkHiTmSu1NYrUui2cu1",
    embed:
      "https://open.spotify.com/embed/artist/3qL7BzwJOXq3EzAio36aLX?utm_source=generator",
  },
  {
    id: 11,
    name: "Misellia",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6xii6ZXEnEx3vAmME7ciK33BQY8viXlFBgPI_g5mS5dz7dl4W",
    embed:
      "https://open.spotify.com/embed/artist/5IjwAAk3njAeiFY1InInsn?utm_source=generator",
  },
  {
    id: 12,
    name: "Donne Maulana",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRgHtg2CekMbFxg5qonbs0kQ8mwsMnxzRSco77hNBlce-7wuQOv",
    embed:
      "https://open.spotify.com/embed/artist/5DKFj8QL05LWzVG82W29CG?utm_source=generator",
  },
  {
    id: 13,
    name: "Feby Putri",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSK20mu7FIRniIISvLPHG_Sd8EXL2xvyRl0d0rEjIUZHkSzESZx",
    embed:
      "https://open.spotify.com/embed/artist/66NmU5epI0ONGmdCRbLpmW?utm_source=generator",
  },
  {
    id: 14,
    name: "Suara Kayu",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfI2sLmpX2LQcE0wzOQL2yADz3_0tw6Ksqde4cyGPQ4EzdQpmF",
    embed:
      "https://open.spotify.com/embed/artist/327ipGIr9bD3MkLb2eucqC?utm_source=generator",
  },
  {
    id: 15,
    name: "Mahalini",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQie54jG3GChzseePie4aO1EjwKOU1GTb4nh5JHOgi5w7hGK5GP",
    embed:
      "https://open.spotify.com/embed/artist/3wOsYKZM0zcKNasi3I7fP4?utm_source=generator",
  },
];

const app = express();

app.use(cors());
app.use(express.json());

const router = express.Router();
app.use("/api", router);

router.get("/albums", (_req, res) => {
  res.json(albums);
});

router.get("/artist", (_req, res) => {
  res.json(artist);
});

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);
