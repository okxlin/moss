import{i as p,w,j as u,k as f,p as V,v as l,m as n,$ as a,F as x}from"./@vue.0987707a.js";const k={__name:"site",setup(_){const e=p("data");return w(()=>e.value.url,o=>{!o||!o.startsWith("http")&&!o.startsWith("//")&&(e.value.url="http://"+e.value.url)}),(o,t)=>{const m=u("a-input"),d=u("a-form-item"),r=u("a-textarea"),i=u("a-divider");return f(),V(x,null,[l(d,{label:o.$t("name")},{default:n(()=>[l(m,{modelValue:a(e).name,"onUpdate:modelValue":t[0]||(t[0]=s=>a(e).name=s),class:"w-64"},null,8,["modelValue"])]),_:1},8,["label"]),l(d,{label:o.$t("url")},{default:n(()=>[l(m,{class:"w-64",modelValue:a(e).url,"onUpdate:modelValue":t[1]||(t[1]=s=>a(e).url=s),placeholder:"http://www.xxx.com"},null,8,["modelValue"])]),_:1},8,["label"]),l(d,{label:o.$t("title"),style:{"max-width":"600px"}},{default:n(()=>[l(m,{modelValue:a(e).title,"onUpdate:modelValue":t[2]||(t[2]=s=>a(e).title=s)},null,8,["modelValue"])]),_:1},8,["label"]),l(d,{label:o.$t("keywords"),field:"keywords",style:{"max-width":"600px"},extra:"keywords"},{default:n(()=>[l(r,{modelValue:a(e).keywords,"onUpdate:modelValue":t[3]||(t[3]=s=>a(e).keywords=s),class:"w-full","auto-size":{minRows:3,maxRows:3}},null,8,["modelValue"])]),_:1},8,["label"]),l(d,{label:o.$t("description"),field:"description",style:{"max-width":"600px"},extra:"description"},{default:n(()=>[l(r,{modelValue:a(e).description,"onUpdate:modelValue":t[4]||(t[4]=s=>a(e).description=s),class:"w-full","auto-size":{minRows:3,maxRows:3}},null,8,["modelValue"])]),_:1},8,["label"]),l(i)],64)}}};export{k as default};