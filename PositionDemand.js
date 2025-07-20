function onChangeSkills(executuionContext)
{
	var formContext= executuionContext.formContext;
	var lookupOptions = 
{
   defaultEntityType: "ltc_skill",
   entityTypes: ["ltc_skill"],
   allowMultiSelect: true,
   filters: [{filterXml: "<filter type="and">
      <condition attribute="statecode" operator="eq" value="0" />
    </filter>",entityLogicalName: "ltc_skill"}]
};

// Get account records based on the lookup Options
Xrm.Utility.lookupObjects(lookupOptions).then(
  function(success){
console.log(success);},
function(error){console.log(error);});
}
