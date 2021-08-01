(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3XMSD",ImageGalleryItemImg:"ImageGalleryItem_ImageGalleryItemImg__2vZqy"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__379Kb",modal:"Modal_modal__3TTUP"}},23:function(e,t,a){e.exports={App:"App_App__3aRpT"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3g0zv"}},26:function(e,t,a){e.exports={Button:"Button_Button__1Qk0L"}},28:function(e,t,a){e.exports={loader:"Loader_loader__17ZqH"}},34:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(33),a(34),a(23)),s=a.n(l),i=a(14),u=a(4),m=a(5),h=a(7),g=a(6),d=a(24),p=a.n(d),b={fetchImages:function(e){var t=e.searchQuery,a=e.page;return p.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("21895237-aa305ef77d16e82934d36c66d","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}},f=a(8),y=a.n(f),j=a(10),S=a(1),I=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.query.trim())return j.b.loading("Where is your query?",{duration:4e3,position:"top-center"});e.props.onSubmit(e.state.query),e.setState({query:""})},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(S.jsx)("header",{className:y.a.Searchbar,children:Object(S.jsxs)("form",{className:y.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(S.jsx)("button",{type:"submit",className:y.a.SearchFormButton,children:Object(S.jsx)("span",{className:y.a.SearchFormButtonLabel,children:"Search"})}),Object(S.jsx)("input",{className:y.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:this.state.query})]})})}}]),a}(n.Component),_=a(12),v=a.n(_),O=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.alt,r=void 0===n?"":n,o=e.openBigImg;return Object(S.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(S.jsx)("img",{src:t,alt:r,className:v.a.ImageGalleryItemImg,onClick:function(){return o(a)}})})},x=a(25),w=a.n(x),B=function(e){var t=e.images,a=e.onSelect;return Object(S.jsx)("ul",{className:w.a.ImageGallery,children:t.map((function(e){return Object(S.jsx)(O,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,alt:e.tags,openBigImg:a},e.id)}))})},k=a(13),C=a.n(k),F=document.querySelector("#modal-root"),M=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleCloseModalByBackdrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e.handleCloseModalByEsc=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleCloseModalByEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleCloseModalByEsc)}},{key:"render",value:function(){return Object(o.createPortal)(Object(S.jsx)("div",{className:C.a.overlay,onClick:this.handleCloseModalByBackdrop,children:Object(S.jsx)("div",{className:C.a.modal,children:Object(S.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),F)}}]),a}(n.Component),L=a(26),N=a.n(L),G=function(e){var t=e.fetchImages;return Object(S.jsx)("button",{className:N.a.Button,type:"button",onClick:t,children:"Load more"})},q=a(27),U=a.n(q),Q=(a(74),a(28)),R=a.n(Q),E=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:1,images:[],loading:!1,error:null,showModal:!1,searchQuery:"",selectedImg:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleSelectImage=function(t){e.setState({selectedImg:t}),e.toggleModal()},e.handleSubmit=function(t){e.setState({images:[],searchQuery:t,page:1})},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),b.fetchImages({searchQuery:a,page:n}).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:!0})})).finally((function(){return e.setState({loading:!1})}))},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.searchQuery,r=a.page;t.searchQuery!==n&&this.fetchImages(),2!==r&&t.page!==r&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.selectedImg,r=e.showModal;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(I,{onSubmit:this.handleSubmit}),Object(S.jsx)(j.a,{}),a&&Object(S.jsx)(U.a,{className:R.a.loader,type:"TailSpin",color:"#00BFFF",height:80,width:80,timeout:5e3}),Object(S.jsx)(B,{images:t,onSelect:this.handleSelectImage}),t.length>0&&Object(S.jsx)(G,{fetchImages:this.fetchImages}),r&&Object(S.jsx)(M,{onClose:this.toggleModal,largeImageURL:n})]})}}]),a}(n.Component);c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(E,{className:s.a.App})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1FmNg",SearchForm:"Searchbar_SearchForm__3zMLS",SearchFormButton:"Searchbar_SearchFormButton__2YzQD",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__obaa-",SearchFormInput:"Searchbar_SearchFormInput__3XXGx"}}},[[75,1,2]]]);
//# sourceMappingURL=main.78c3ee9e.chunk.js.map