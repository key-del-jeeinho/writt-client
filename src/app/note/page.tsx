import EditorView from "@/components/EditorView";
import LeftBar from "@/components/LeftBar";
import TopBar from "@/components/TopBar";
import { File, FileScheme } from "@/interface/File";
import { FileSet } from "@/interface/FileSet";
import { Tab } from "@/interface/Tab";
import { DateTime } from "luxon";
import { v4 as uuid } from "uuid";

const fileSet: FileSet[] = [
  { 
    id: uuid(), 
    name: "직소",
    type: 'file',
    ext: "md",
    description: "다자이 오사무 作 소설",
    content: `
      아뢰옵니다. 아뢰옵니다. 나리. 그 사람은 추악합니다. 추악합니다. 네. 지긋지긋한 녀석입니다. 악한 사람입니다. 아아. 참을 수 없어. 살려둘 수 없어.
      <br/><br/>
      네, 네. 차분히 아뢰겠습니다. 그 사람을 살려두어선 안됩니다. 온 세상의 원수입니다. 네, 무엇이든, 빠짐없이 전부 말씀드리죠. 저는 그 사람이 어디에 있는지 알고 있습니다. 곧바로 안내해드리죠. 하나하나 토막내어서 죽여주십시오. 그 사람은 저의 스승입니다. 주입니다. 하지만 저와 나이가 같습니다. 서른넷입니다. 저는 그 사람보다 오직 두 달 늦게 태어났을 뿐입니다. 큰 차이가 없을 터입니다. 사람과 사람 사이에 그토록 지독한 차별은 없을 겁니다. 그런데도 저는 오늘까지 그 사람에게 얼마나 지독하게 이용당해 왔는지. 얼마나 조롱을 받아왔는지. 아아, 이젠 지긋지긋합니다. 견딜 만큼 견뎌왔습니다. 화낼 때 화내지 않으면 사람으로서 사는 의미가 없습니다. 제가 지금까지 그 사람을 뒤에서 얼마나 감싸왔는지. 아무도 모를 겁니다. 그 사람 본인조차도 전혀 모릅니다. 아니, 그 사람은 압니다. 분명 알고 있습니다. 알기에 더욱 그 사람은 저를 지독하게 경멸하는 것입니다. 
      <br/><br/>
      그 사람은 오만합니다. 제게 큰 신세를 지고 있으니, 자신은 그것이 분한 것입니다. 그 사람은 어리석을 정도로 자만에 빠져 있습니다. 저따위에게 신세를 지고 있다는 사실이 마치 자신의 큰 약점이라도 되는 것마냥 굳게 믿고 있는 겁니다. 그 사람은 스스로 무엇이든 해낼 수 있다고 사람들에게 보이고 싶어 안달이 났습니다. 어리석습니다. 세상은 그렇게 돌아가는 게 아니란 말입니다. 이 세상에서 살아가기 위해선 어떻게든 남에게 꾸벅꾸벅 고개를 숙여야만 하고, 그렇게 한 걸음 한 걸음 고생하여 남을 짓밟는 것밖에는 다른 방도가 없다는 말입니다. 그 사람이 대체 무엇을 할 수 있단 말입니까? 아무것도 할 수 없습니다. 제가 보기엔 그저 햇병아리입니다. 제가 혹여 사라진다면 그 사람은 이미 한참 전에 그 무능한 얼뜨기 제자들과 들판 어딘가에서 객사했을 것이 뻔합니다. &apos;여우에게도 굴이 있고 새에게도 거처가 있으나 오직 인자에게는 머리 둘 곳이 없다.&apos; 그래, 그래, 그겁니다. 똑바로 말하고 있지 않습니까. 베드로가 무얼 할 수 있습니까? 야고보, 요한, 안드레아, 토마스, 그 천치 무리들이 그 사람을 실실 따라서 걸으며 소름이 돋도록 달콤한 아부를 해대고, 천국이니 뭐니 하는 멍청한 말에 정신이 팔린 채 믿고 열광해대니, 천국이 다가온다면 그 놈들 전부 우의정 좌의정이라도 맡을 셈인가, 멍청한 자식들. 
      <br/><br/>
      그날 먹을 빵이 없었을 때도 제가 어떻게든 수를 쓰지 않았다면 모두 굶어서 죽었을 뿐이지 않습니까? 저는 그 사람에게 설교를 시키고선 군중에게서 몰래 헌금을 걷었고, 또 마을의 부자들에게서 공물을 거두었고, 잘 곳과 매일의 옷과 음식을 번거로움을 마다 않고 구해왔는데, 그 사람은 고사하고 그 어리석은 제자 놈들마저도 제게 감사 인사 한 마디 하지 않습니다. 감사는커녕 그 사람은 매일 숨은 저의 노고를 모른 채하며, 언제나 거창하게 사치를 이야기하십니다. 빵 다섯 개와 물고기 두 마리밖에 없을 때조차 앞에 있는 수많은 군중을 먹이라며 참으로 지난한 명을 내리셔서, 저는 뒤에서 힘겹게 변통하여 간신히 명받은 음식들을 구해올 수 있었습니다. 말하자면 저는 그 사람의 기적을 위한 심부름꾼을, 위태로운 마술의 조수를 지금껏 수도 없이 맡아왔던 겁니다. 저는 이래 보여도 결코 인색한 사내가 아닙니다. 오히려 제게는 꽤나 고상한 취향이 있습니다. 저는 그 사람을 아름다운 사람이라고 생각합니다. 제 눈에는 그저 욕심 없는 아이처럼, 제가 날마다 빵을 얻기 위해 돈을 부지런히 모아도 이내 한 푼도 남기지 않고 쓸모없는 곳에 써버리시고는 합니다. 하지만 저는 그것을 원망하지 않습니다. 그 사람은 아름다운 사람입니다. 저는 본래 가난한 상인이나, 그럼에도 정신을 중시하는 이들을 이해한다고 봅니다.
    `,
    createdAt: DateTime.fromObject({year: 2024, month: 9, day: 29, hour: 12, minute: 30, second: 15}),
    lastModifiedAt: DateTime.now(),
  },
  { id: uuid(), name: "어릿광대의 꽃", type: 'file', ext: "md", content: '', description: '', createdAt: DateTime.fromObject({year: 2024, month: 9, day: 29, hour: 13, minute: 27, second: 43}), lastModifiedAt: DateTime.now() },
  { id: uuid(), name: "인간실격", type: 'file', ext: "md", content: '', description: '', createdAt: DateTime.fromObject({year: 2024, month: 10, day: 1, hour: 3, minute: 1, second: 33}), lastModifiedAt: DateTime.now() },
  { id: uuid(), name: "어린왕자", type: 'file', ext: "md", content: '', description: '', createdAt: DateTime.fromObject({year: 2024, month: 10, day: 2, hour: 19, minute: 54, second: 1}), lastModifiedAt: DateTime.now() },
  { id: uuid(), name: "J. J. 루소", type: 'folder' },
  { id: uuid(), name: "한비자", type: 'folder' },
  { id: uuid(), name: "T.모어", type: 'folder' },
]

const filesIn1depth: File[] = fileSet
  .filter(content => content.type === 'file')
  .map(file => FileScheme.parse(file));

const tabs: Tab[] = filesIn1depth.map(content => ({
  id: content.id,
  name: content.name,
  ext: content.ext,
}))

const activeTab = tabs[0];
const file = filesIn1depth[0];
const deactiveTabs = tabs.slice(1);

export default function NotePage() {
    return (
      <div className="h-full w-full flex flex-row">
        <LeftBar contents={fileSet}/>
        
        <div className="w-full flex flex-col">
          <TopBar activeTab={activeTab} deactiveTabs={deactiveTabs} />
          <EditorView file={file} />
        </div>
      </div>
    );
  }
  