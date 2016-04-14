import Ember from 'ember';

const uiButton = [
`{{#ui-button theme="basic"}}button{{/ui-button}}`,
`{{#ui-button theme="basic" loading=true}}button{{/ui-button}}`,
`{{#ui-button disabled="true" }}button{{/ui-button}}`,
`{{#ui-button theme="primary" }}button{{/ui-button}}`,
`{{#ui-button theme="secondary" }}button{{/ui-button}}`,
`{{#ui-button theme="red" }}button{{/ui-button}}`,
`
{{#ui-button theme="compact" action=(action "clickMe" 'value') }}
    <i class="icon heart"></i>
    heart
{{/ui-button}}`,
    ];

const uiAnimatedButton = [
`
{{#ui-animated-button as |ab| }}
    <div class="{{ab.visible}}">Next</div>
    <div class="{{ab.hidden}}">
        <i class="right arrow icon"></i>
    </div>
{{/ui-animated-button}}`
    ];

const uiCheckboxGroup = [
`
{{#ui-checkbox-group theme="inline fields" value=checkvalue as |valueChange| }}
    <label>choose company</label>
    <div class="field" >
        {{#ui-checkbox  value="apple" action=(action valueChange) }}apple{{/ui-checkbox}}
    </div>
    <div class="field" >
        {{#ui-checkbox  value="google" action=(action valueChange) }}google{{/ui-checkbox}}
    </div>
    <div class="field" >
        {{#ui-checkbox  value="dropbox" action=(action valueChange) }}dropbox{{/ui-checkbox}}
    </div>
{{/ui-checkbox-group}}`,
`{{ui-checkbox-group theme="grouped fields" label="choose company" options=options value=value }}`,
`{{ui-checkbox-group label="choose company" theme="inline fields" options=options value=value }}`
    ];

const uiCheckbox = [
`
{{#ui-checkbox checked=isChecked }}normal{{/ui-checkbox}}
{{#ui-pointing-label theme="basic blue" direction="left"}}
    {{isChecked}}
{{/ui-pointing-label}}`,
`{{#ui-checkbox checked=true }}normal{{/ui-checkbox}}`,
`{{#ui-checkbox theme="toggle"}}toggle{{/ui-checkbox}}`,
`{{#ui-checkbox checked=true theme="toggle"}}toggle{{/ui-checkbox}}`,
`{{#ui-checkbox theme="slider"}}slider{{/ui-checkbox}}`,
`{{ui-checkbox value='i am checked' checked=true action=(action "someAction") update=(action (mut value))}}`
    ];

const uiDropdownMenu = [
`
{{#ui-dropdown-menu}}
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
{{/ui-dropdown-menu}}`
];

const uiDropDown = [];

const uiFormInput = [];

const uiForm = [
`
{{#ui-form }}
    {{ui-form-input}}
    {{#ui-button}}save{{/ui-button}}
{{/ui-form}}`,
`
{{#ui-form loading=true }}
   {{ui-form-input}}
   {{#ui-button}}save{{/ui-button}}
{{/ui-form}}`,
`
{{#ui-form success=true }}
  {{#ui-form-input}}email{{/ui-form-input}}
  <div class="ui success message">
      <div class="header">Form Completed</div>
      <p>You're all signed up for the newsletter.</p>
  </div>
  {{#ui-button}}save{{/ui-button}}
{{/ui-form}}`,
`
{{#ui-form error=true }}
    {{#ui-form-input}}email{{/ui-form-input}}
    <div class="ui error message">
        <div class="header">Form Completed</div>
        <p>You're all signed up for the newsletter.</p>
    </div>
    {{#ui-button}}save{{/ui-button}}
{{/ui-form}}`,
`
{{#ui-form theme="fluid" }}
    {{#ui-form-input}}email{{/ui-form-input}}
    {{#ui-button}}save{{/ui-button}}
{{/ui-form}}
`,
`
{{#ui-form theme="huge" }}
    {{#ui-form-input}}email{{/ui-form-input}}
    {{#ui-button}}save{{/ui-button}}
{{/ui-form}}`
];

const uiInput = [];

const uiInputTags = [
`{{ui-input-tags value=value}}`,
`{{ui-input-tags update=(action (mut value)) }}`
];

const uiLabel = [
`                 
{{#ui-label theme="rblue image" }}
     i am label
    <div class="detail" >detail</div>
{{/ui-label}}`,
`
{{#ui-label theme="raised segment" }}
      <div class="ribbon" >i am label</div>
{{/ui-label}}`,
`{{#ui-label theme="basic" }}label{{/ui-label}}`,
`{{#ui-label theme="basic red" }}label{{/ui-label}}`,
`{{#ui-label theme="red" }}label{{/ui-label}}`,
`
{{#ui-label theme="red image" }}
  <img src="//www.baidu.com/img/bd_logo1.png">
   baidu
{{/ui-label}}`,
  ];


const uiPointingLabel = [
`
{{#ui-pointing-label theme="red" direction="left" }}
    below label
{{/ui-pointing-label}}`,
`
{{#ui-pointing-label theme="tag blue" direction="below" }}
    label
{{/ui-pointing-label}}`,
`
{{#ui-pointing-label direction="below" }}
    below label
{{/ui-pointing-label}}`,
`
{{#ui-pointing-label direction="left" }}
    left label
{{/ui-pointing-label}}`,
`
{{#ui-pointing-label direction="right" }}
    right lbale
{{/ui-pointing-label}}`,];

const uiLabeledButton = [
`
{{#ui-labeled-button}}
    {{#ui-button theme="primary" }}
        <i class="heart icon" ></i>
    {{/ui-button}}
    {{#ui-label theme="basic" }}2,148{{/ui-label}}
{{/ui-labeled-button}}`,
`
{{#ui-labeled-button}}
  {{#ui-button theme="red" }}
      <i class="heart icon" ></i>
  {{/ui-button}}
  {{#ui-pointing-label theme="basic red" direction="left" }}2,148{{/ui-pointing-label}}
{{/ui-labeled-button}}`,
`
{{#ui-labeled-button}}
    {{#ui-button theme="basic blue" }}
        <i class="heart icon" ></i>
    {{/ui-button}}
    {{#ui-pointing-label theme="basic blue" direction="left" }}2,148{{/ui-pointing-label}}
{{/ui-labeled-button}}`,
  ];

const uiLeftLabeledButton = [
`
{{#ui-left-labeled-button}}
  {{#ui-pointing-label theme="basic blue" direction="right" }}2,148{{/ui-pointing-label}}
  {{#ui-button theme="blue" }}
      <i class="heart icon" ></i>
  {{/ui-button}}
{{/ui-left-labeled-button}}`
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
{{#ui-modal show=display onShow=(action "onShow") onApprove=(action "onApprove") onHide=(action "onHide") onDeny=(action "onDeny") transition=transition }}
    {{#ui-modal-title }}modal 1{{/ui-modal-title}}
    {{#ui-modal-content theme="image"}}
      <div class="ui small image" >
        <img src="//www.baidu.com/img/bd_logo1.png">
      </div>
      <div class="description" >
        <div class="ui header" >
          <p>first role</p>
        </div>
      </div>
    {{/ui-modal-content}}
    {{#ui-modal-foot}}
      <div class="ui black deny button">
          Nope
      </div>
      <div class="ui positive right labeled icon button">
          Yep, that's me <i class="checkmark icon"></i>
      </div>
    {{/ui-modal-foot}}
  {{/ui-modal}}`
];

const uiMultiSelect = [
`
{{#ui-multi-select label="品牌选择" options=options value=value}}
    <label>品牌选择</label>
{{/ui-multi-select}}`
];

const uiProgress = [];

const uiRadioGroup = [
`
{{#ui-radio-group theme="grouped" value=checkvalue name="co1" as |vc| }}
  <label>choose company</label>
  <div class="field" >
      {{#ui-radio  value="apple" action=vc }}apple{{/ui-radio}}
  </div>
  <div class="field" >
      {{#ui-radio  value="google" action=vc }}google{{/ui-radio}}
  </div>
  <div class="field" >
      {{#ui-radio  value="dropbox" action=vc }}dropbox{{/ui-radio}}
  </div>
  <div class="field">
      {{checkvalue}}
  </div>
{{/ui-radio-group}}`,
`
 {{ui-radio-group name="co3" labelPath="name" label="choose company" theme="inline fields" options=options value=value }}
`
];

const uiSegment = [];

const uiSelect = [
`
{{ui-select label="select brand" placeholder="select brand" search=true options=options value=value}}
`
];

const uiTabMenu = [
`
{{#ui-tab-menu tabs='first,second' active='first' }}
  
{{/ui-tab-menu}}
{{#ui-tab-segment tab='first' active=true}}
  first
{{/ui-tab-segment}}
{{#ui-tab-segment tab='second'}}
  second
{{/ui-tab-segment}}
`
];


const fileInput = [
`{{file-input url="/upload" autoUpload=false extra=extra uploadProgress="uploadProgress" fileObject=fileObject uploadStart="uploadStart" uploadSucess="uploadSucess" }}`
];

const uiUploader = [
`
{{ui-uploader multiple=true url="/upload" autoUpload=true uploadStart="uploadStart" uploadProgress="uploadProgress" uploadSucess="uploadSucess" deleteFile="deleteFile" }}
`
];

const uiDateTimeInput = [
`{{ui-date-time-input value='2016-03-04 12:12' update=(action (mut value))}}`,
`
<div class="ui form">
{{#ui-date-time-input value=value update=(action (mut value)) class="three fields" as |datetime| }}
      <div class="field">
          <label>日期</label>
          {{component datetime.date  }}
      </div>
      <div class="field">
          <label>小时</label>
          {{component datetime.hour}}
      </div>
      <div class="field">
          <label>分钟</label>
          {{component datetime.minute}}
      </div>
{{/ui-date-time-input}}
</div>
`
];

const uiPopup = [
`
{{#ui-popup popup=target tagName='button' class="ui button" onShow=(action "onPopupShow" 'hello pop')}}show me{{/ui-popup}}
{{#ui-popup-content target=(mut target) }}
    <div class="header">
        {{value}}
    </div>
{{/ui-popup-content}}
`,
`
{{#ui-popup popup=target1 tagName='button' event='click' hoverable=true class="ui button" onShow=(action "onPopupShow" 'hello pop')}}show me{{/ui-popup}}
{{#ui-popup-content target=(mut target1) class="fluid"}}
    <div class="ui grid">
        <div class="ui form six column">
          <div class="field">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="field">
              <button class="ui button save" {{action "save"}} >save</button>
              <button class="ui button cancel" {{action "cancel"}} >cancel</button>
          </div>
        </div>
    </div>
{{/ui-popup-content}}
`,
`
{{#ui-popup tagName='span' hoverable=true title='i am popup title' content='i am popup content'}}show me{{/ui-popup}}
`
]



const code = {
    'ui-uploader': uiUploader,
    'ui-tab-menu': uiTabMenu,
    'ui-select': uiSelect,
    'ui-segment': uiSegment,
    'ui-radio-group': uiRadioGroup,
    'ui-progress': uiProgress,
    'ui-multi-select': uiMultiSelect,
    'ui-modal': uiModal,
    'ui-message': uiMessage,
    'ui-left-labeled-button': uiLeftLabeledButton,
    'ui-labeled-button': uiLabeledButton,
    'ui-label': uiLabel,
    'ui-pointing-label': uiPointingLabel,
    'ui-input-tags': uiInputTags,
    'ui-input': uiInput,
    'ui-form': uiForm,
    'ui-form-input': uiFormInput,
    'ui-button': uiButton,
    'ui-animated-button': uiAnimatedButton,
    'ui-checkbox-group': uiCheckboxGroup,
    'ui-checkbox': uiCheckbox,
    'ui-dropdown-menu': uiDropdownMenu,
    'file-input': fileInput,
    'ui-date-time-input': uiDateTimeInput,
    'ui-popup': uiPopup,
    'ui-tab-menu': uiTabMenu,
};

export default Ember.Service.extend({
    code: code
});