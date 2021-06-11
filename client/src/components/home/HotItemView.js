import HotItem from "components/home/HotItem";
import "assets/css/HotItemView.scss";

export default function HotItemView() {
  return (
    <div id="hot-item-section">
      <div id="sub-item-section">
        <div id="main-title">인기 경매품 목록</div>
        <ul id="row-style">
          <li>
            <HotItem name="Item 1" />
            <HotItem name="Item 2" />
            <HotItem name="Item 3" />
            <HotItem name="Item 4" />
          </li>
          <li>
            <HotItem name="Item 5" />
            <HotItem name="Item 6" />
            <HotItem name="Item 7" />
            <HotItem name="Item 8" />
          </li>
        </ul>
      </div>
    </div>
  );
}
