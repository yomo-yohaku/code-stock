const l=`<div class="tw:bg-slate-200 tw:p-[32px] tw:md:p-[40px]">
  <p
    class="tw:font-bold tw:text-[16px] tw:md:text-[24px] tw:mb-[16px] tw:md:mb-[24px] tw:text-center"
  >
    tableタグ（.p-table-profile）
  </p>

  <table class="p-table-profile" aria-label="プロフィール情報">
    <tr class="p-table-profile__row">
      <th class="p-table-profile__th">項目</th>
      <td class="p-table-profile__td">
        <div class="p-table-profile__body">
          <p>ここに内容が入ります。</p>
        </div>
      </td>
    </tr>
    <tr class="p-table-profile__row">
      <th class="p-table-profile__th">項目02</th>
      <td class="p-table-profile__td">
        <div class="p-table-profile__body">
          <p>ここに内容が入ります。</p>
          <ul class="p-table-profile__list">
            <li class="p-table-profile__list-item">リスト</li>
            <li class="p-table-profile__list-item">リスト</li>
            <li class="p-table-profile__list-item">リスト</li>
          </ul>
        </div>
      </td>
    </tr>
    <tr class="p-table-profile__row">
      <th class="p-table-profile__th">項目</th>
      <td class="p-table-profile__td">
        <div class="p-table-profile__body">
          <p>ここに内容が入ります。ここに内容が入ります。</p>
        </div>
      </td>
    </tr>
  </table>
</div>

<div class="tw:bg-orange-50 tw:p-[32px] tw:md:p-[40px]">
  <p
    class="tw:font-bold tw:text-[16px] tw:md:text-[24px] tw:mb-[16px] tw:md:mb-[24px] tw:text-center"
  >
    dl、dt、ddタグ（.p-table-profile-dl）
  </p>

  <div class="p-table-profile-dl">
    <dl class="p-table-profile-dl__row">
      <dt class="p-table-profile-dl__th">項目</dt>
      <dd class="p-table-profile-dl__td">
        <div class="p-table-profile-dl__body">
          <p>ここに内容が入ります。</p>
        </div>
      </dd>
    </dl>

    <dl class="p-table-profile-dl__row">
      <dt class="p-table-profile-dl__th">項目02</dt>
      <dd class="p-table-profile-dl__td">
        <div class="p-table-profile-dl__body">
          <p>ここに内容が入ります。</p>
          <ul class="p-table-profile-dl__list">
            <li class="p-table-profile-dl__list-item">リスト</li>
            <li class="p-table-profile-dl__list-item">リスト</li>
            <li class="p-table-profile-dl__list-item">リスト</li>
          </ul>
        </div>
      </dd>
    </dl>

    <dl class="p-table-profile-dl__row">
      <dt class="p-table-profile-dl__th">項目</dt>
      <dd class="p-table-profile-dl__td">
        <div class="p-table-profile-dl__body">
          <p>ここに内容が入ります。</p>
        </div>
      </dd>
    </dl>
  </div>
</div>
`,e=`.p-table-profile {
  width: 100%;
  border-top: 1px solid #cad5e2;
}

.p-table-profile__row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-block: 24px;
  border-bottom: 1px solid #cad5e2;
}
@media screen and (min-width: 768px) {
  .p-table-profile__row {
    flex-direction: row;
    padding-block: 32px;
  }
}

.p-table-profile__th {
  font-weight: 700;
}
@media screen and (min-width: 768px) {
  .p-table-profile__th {
    width: 180px;
  }
}

.p-table-profile__td {
  display: flex;
  gap: 24px;
}

.p-table-profile__body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.p-table-profile__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.p-table-profile__list-item {
  position: relative;
  padding-left: 0.75em;
}

.p-table-profile__list-item::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "・";
}

.p-table-profile-dl {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 28px;
  border-top: 1px solid #cad5e2;
}
@media screen and (min-width: 768px) {
  .p-table-profile-dl {
    gap: 32px;
    margin-top: 40px;
  }
}

.p-table-profile-dl__row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 24px;
  border-bottom: 1px solid #cad5e2;
}
@media screen and (min-width: 768px) {
  .p-table-profile-dl__row {
    flex-direction: row;
    padding-bottom: 32px;
  }
}

.p-table-profile-dl__th {
  font-weight: 700;
}
@media screen and (min-width: 768px) {
  .p-table-profile-dl__th {
    width: 180px;
  }
}

.p-table-profile-dl__td {
  display: flex;
  gap: 24px;
}
@media screen and (min-width: 768px) {
  .p-table-profile-dl__td {
    flex: 1;
  }
}

.p-table-profile-dl__body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
@media screen and (min-width: 768px) {
  .p-table-profile-dl__body {
    flex: 1;
  }
}

.p-table-profile-dl__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.p-table-profile-dl__list-item {
  position: relative;
  padding-left: 0.75em;
}

.p-table-profile-dl__list-item::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "・";
}
`,t={title:"Project/Table"},n={render:()=>`
    <style>${e}</style>
    ${l}
  `,parameters:{sourceCode:[{name:"HTML",code:l},{name:"CSS",code:e}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssProfile}</style>
    \${profile}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: profile
    }, {
      name: "CSS",
      code: cssProfile
    }]
  }
}`,...n.parameters?.docs?.source}}};const p=["Profile"];export{n as Profile,p as __namedExportsOrder,t as default};
