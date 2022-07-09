import Service from '@ember/service';

const uiButton = [
  `<UiButton @class="basic">button</UiButton>`,
  `<UiButton @class="basic" @loading={{true}}>button</UiButton>`,
  `<UiButton @disabled={{true}}>button</UiButton>`,
  `<UiButton @class="primary">button</UiButton>`,
  `<UiButton @class="secondary">button</UiButton>`,
  `<UiButton @class="red">button</UiButton>`,
  `
<UiButton @class="compact" @onClick={{(fn this.clickMe 'My Heart')}}>
  <i class="icon heart"></i>
  heart
</UiButton>`,
];

const uiCheckboxGroup = [
  `
<div class="ui form" >
  <UiCheckboxGroup @class="inline fields" @onChange={{this.onChange1}} as |valueChange|>
      <label>choose company</label>
      <div class="field" >
          <UiCheckbox @value="apple" @onChange={{valueChange}}>apple</UiCheckbox>
      </div>
      <div class="field" >
          <UiCheckbox @value="google" @onChange={{valueChange}}>google</UiCheckbox>
      </div>
      <div class="field" >
          <UiCheckbox @value="dropbox" @onChange={{valueChange}}>dropbox</UiCheckbox>
      </div>
      <div class="field">
          {{this.valueShow1}}
      </div>
  </UiCheckboxGroup>
</div>
  `,
  `
<div class="ui form" >
  <UiCheckboxGroup @class="inline fields" @type={{"radio"}}
    @onChange={{this.onChangeRadio1}} as |valueChange name|>
      <label>choose company</label>
      <div class="field" >
          <UiCheckbox
          @value="apple"
          @name={{name}}
          @type={{"radio"}}
          @onChange={{valueChange}}>apple</UiCheckbox>
      </div>
      <div class="field" >
          <UiCheckbox
          @value="google"
          @name={{name}}
          @type={{"radio"}}
          @onChange={{valueChange}}>google</UiCheckbox>
      </div>
      <div class="field" >
          <UiCheckbox @value="dropbox" @name={{name}}
          @type={{"radio"}} @onChange={{valueChange}}>dropbox</UiCheckbox>
      </div>
      <div class="field">
          {{this.radioValue1}}
      </div>
  </UiCheckboxGroup>
</div>
  `,
  `
<div class="ui form" >
  <UiCheckboxGroup @class="grouped fields"
  @label="choose company" @options={{this.options.options}}
  @onChange={{this.onChange2}}></UiCheckboxGroup>
  <div class="field">
      {{this.valueShow2}}
  </div>
</div>
  `,
  `
<div class="ui form" >
  <UiCheckboxGroup @label="choose company"
    @class="inline fields" @options={{this.options.options}}
    @onChange={{this.onChange3}}></UiCheckboxGroup>
  <div class="field">
      {{this.valueShow3}}
  </div>
</div>
  `
];

const uiCheckbox = [
  `
  <UiCheckbox @checked={{this.isChecked}} @onChange={{this.onChange}}>normal</UiCheckbox>
  `,
  `<UiCheckbox @checked={{true}}>normal</UiCheckbox>`,
  `<UiCheckbox @class="toggle">toggle</UiCheckbox>`,
  `<UiCheckbox @checked={{true}} @class="toggle">toggle</UiCheckbox>`,
  `<UiCheckbox @class="slider">slider</UiCheckbox>`,
  `<UiCheckbox @value={{"i am checked"}} @checked={{true}} @onChange={{this.onChange}} />`,
];

const uiDropdownMenu = [
  `
<UiDropdownMenu>
  <div class="text">File</div>
  <i class="dropdown icon"></i>
  <div class="menu">
      <div class="item">New</div>
      <div class="item">
        <span class="description">ctrl + o</span>
        Open...
      </div>
      <div class="item">
        <span class="description">ctrl + s</span>
        Save as...
      </div>
      <div class="item">
        <span class="description">ctrl + r</span>
        Rename
      </div>
      <div class="item">Make a copy</div>
      <div class="item">
        <i class="folder icon"></i>
        Move to folder
      </div>
      <div class="item">
        <i class="trash icon"></i>
        Move to trash
      </div>
      <div class="divider"></div>
      <div class="item">Download As...</div>
      <div class="item">
        <i class="dropdown icon"></i>
        Publish To Web
        <div class="menu">
          <div class="item">Google Docs</div>
          <div class="item">Google Drive</div>
          <div class="item">Dropbox</div>
          <div class="item">Adobe Creative Cloud</div>
          <div class="item">Private FTP</div>
          <div class="item">Another Service...</div>
        </div>
      </div>
      <div class="item">E-mail Collaborators</div>
  </div>
</UiDropdownMenu>`,
];

const uiInput = [
  `<UiInput @focus={{true}}></UiInput>`,
  `<UiInput @class={{"icon"}} @loading={{true}}><i class="search icon"></i></UiInput>`,
  `<UiInput @error={{true}}></UiInput>`,
  `<UiInput @disabled={{true}} @value={{"search"}}></UiInput>`,
  `<UiInput @readonly={{true}} @value={{"search"}}></UiInput>`,
  `
<label for="">email</label>
  <UiInput @onFocus={{this.onfocus}}></UiInput>
{{this.result}}`,
  `
<UiInput @class="fluid icon" @value={{"search"}}>
    <i class="search icon"></i>
</UiInput>`,
  `
<UiInput @class="fluid action" @value={{"fluid"}}>
    <UiButton>search</UiButton>
</UiInput>`,
  `
<UiInput @class="mini icon" @value={{"search"}}>
    <i class="search icon"></i>
</UiInput>`,
  `
<UiInput @class="small icon" @value={{"search"}}>
    <i class="search icon"></i>
</UiInput>`,
  `
<UiInput @class="big icon" @value={{"search"}}>
    <i class="search icon"></i>
</UiInput>`,
  `
<UiInput @class="huge icon" @value={{"search"}}>
  <i class="search icon"></i>
</UiInput>`,
];

const uiInputTags = [
  `<UiInputTags @value={{this.value}} @onChange={{set this "value"}} />`,
];

const uiMessage = [
  `{{#ui-message type="info" header="这是一条提示消息"}}{{/ui-message}}`,
  `{{#ui-message type="success" header="这是一条成功消息"}}{{/ui-message}}`,
  `{{#ui-message type="error" header="这是一条错误消息"}}{{/ui-message}}`,
  `{{#ui-message type="warning" header="这是一条警告消息"}}{{/ui-message}}`,
  `{{#ui-message header="这是一条消息"}}{{/ui-message}}`,
  `{{#ui-message header="这是超大号消息" size="massive"}}{{/ui-message}}`,
  `{{#ui-message close=true header="这是一条可清除的消息"}}{{/ui-message}}`,
  `{{#ui-message header="这是一条可自动消除的消息" timeout=20000 }}{{/ui-message}}`,
  `
{{#ui-message header="这是一条带内容的消息"}}
    <ul>
      <li>
        <p>第一点</p>
      </li>
      <li>
        <p>第二点</p>
      </li>
    </ul>
{{/ui-message}}`,
];

const uiModal = [
  `
<UiModal @show={{this.display}}  @onShow={{this.onShow}} @onApprove={{this.onApprove}} @onHide={{this.onHide}} @onDeny={{this.onDeny}} @class={{this.class}}>
  <UiModal::Title>modal 1</UiModal::Title>
  <UiModal::Content class="image">
    <div class="ui small image" >
      <img src="//www.baidu.com/img/bd_logo1.png">
    </div>
    <div class="description" >
      <div class="ui header" >
        <p>first role</p>
      </div>
    </div>
  </UiModal::Content>
  <UiModal::Foot>
    <div class="ui black deny button">
        Nope
    </div>
    <div class="ui positive right labeled icon button">
        Yep, that's me <i class="checkmark icon"></i>
    </div>
  </UiModal::Foot>
</UiModal>`,
];

const uiMultiSelect = [
  `
<UiMultiSelect
  @label={{"品牌选择"}}
  @options={{this.options.options}}
  @value={{this.value}}
  @onChange={{this.onChange}}
/>`,
];

const uiProgress = [
  `<UiProgress @percent={{this.value}} ></UiProgress>
`,
];

const uiSelect = [
  `
<div class="ui segment">
  <div class="meta">
    {{this.value}}
  </div>
  <UiSelect @search={{true}} @options={{this.options.options}} @onChange={{(set this "value")}} />
</div>
`,
];

const uiTabMenu = [
  `
<div class="ui segment">
  <UiTabMenu  @active={{"first"}}>
    <a class="item" data-tab="first" >first</a>
        <a class="item" data-tab="second" >second</a>
  </UiTabMenu>
  <UiTabSegment @tab="first" @active={{true}}>
    first
  </UiTabSegment>
  <UiTabSegment @tab="second">
    second
  </UiTabSegment>
</div>
`,
];

const fileInput = [
  `
<FileInput @url={{"/upload"}}
  @autoUpload={{false}}
  @extra={{this.extra}}
  @uploadProgress={{this.uploadProgress}}
  @fileObject={{this.fileObject}}
  @uploadStart={{this.uploadStart}} @uploadSucess={{this.uploadSucess}}/>`,
];

const uiUploader = [
  `
<UiUploader
  @multiple={{true}}
  @url={{"/upload"}}
  @autoUpload={{true}}
  @uploadStart={{this.uploadStart}}
  @uploadProgress={{this.uploadProgress}}
  @uploadSucess={{this.uploadSucess}} @deleteFile={{this.deleteFile}}></UiUploader>
`,
];

const uiDateTimeInput = [
  `<UiDateInput @value={{"2016-03-04"}} ></UiDateInput>`,
  `
<UiDateTimeInput
  @value="2016-03-04 12:12"
  @onChange={{set this "value"}}
/>
`,
];

const uiPopup = [
  `
<UiPopup
  @popup={{this.popup}}
  class="ui button"
  @onShow={{fn this.onPopupShow "hello pop"}}
>hover show me</UiPopup>
<UiPopup::Content @popup={{set this "popup"}}>
  <div class="header">
    {{this.value}}
  </div>
</UiPopup::Content>
`,
  `
<UiPopup
  @popup={{this.popup1}}
  @event={{"click"}}
  @boundary={{"boundary"}}
  class="ui button"
  @onShow={{fn this.onPopupShow "hello pop"}}
>click show me</UiPopup>
<UiPopup::Content @popup={{set this "popup1"}} class="fluid">
`,
  `
<UiPopup
  class="ui button"
  @hoverable={{true}}
  @title="i am popup title"
  @content="i am popup content"
>hover show me</UiPopup>
`,
];

const layout = [
  `
<div class="ui grid">
    <UiColumn @wide={{4}}>
      <div class="ui segment">
        left
      </div>
    </UiColumn>
    <UiColumn @wide={{12}}>
      <div class="ui segment">
        main content
      </div>
    </UiColumn>
</div>
`,
  `
<div class="ui contianer">
  <div class="ui grid">
    <UiColumn @wide={{6}}>
      <div class="ui vertical menu">
        <a class="active teal item">
          Inbox
          <div class="ui teal pointing left label">1</div>
        </a>
        <a class="item">
          Spam
          <div class="ui label">51</div>
        </a>
        <a class="item">
          Updates
          <div class="ui label">1</div>
        </a>
        <div class="item">
          <div class="ui transparent icon input">
            <input type="text" placeholder="Search mail...">
            <i class="search icon"></i>
          </div>
        </div>
      </div>
    </UiColumn>
    <UiColumn @wide={{10}}>
      <div class="ui segment">
        <div class="ui form">
          <div class="field">
            <label for="">name</label>
            <input type="text">
          </div>
          <button class="ui button" type="button">submit</button>
        </div>
      </div>
    </UiColumn>
  </div>
</div>
`,

  `
<div class="ui grid">
  <UiColumn @wide={{16}}>
    <div class="ui menu">
      <div class="item">
        Home
      </div>
    </div>
  </UiColumn>
  <UiColumn @wide={{4}}>
    <div class="ui segment">
      left
    </div>
  </UiColumn>
  <UiColumn @wide={{12}}>
    <div class="ui segment">
      main content
    </div>
  </UiColumn>
</div>
`,
];

const code = {
  'ui-uploader': uiUploader,
  'ui-tab-menu': uiTabMenu,
  'ui-select': uiSelect,
  'ui-progress': uiProgress,
  'ui-multi-select': uiMultiSelect,
  'ui-modal': uiModal,
  'ui-message': uiMessage,
  'ui-input-tags': uiInputTags,
  'ui-input': uiInput,
  'ui-button': uiButton,
  'ui-checkbox-group': uiCheckboxGroup,
  'ui-checkbox': uiCheckbox,
  'ui-dropdown-menu': uiDropdownMenu,
  'file-input': fileInput,
  'ui-date-time-input': uiDateTimeInput,
  'ui-popup': uiPopup,
  layout: layout,
};

export default class CodeService extends Service {
  code = code;
}
