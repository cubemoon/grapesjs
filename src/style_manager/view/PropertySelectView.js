define(['backbone','./PropertyView', 'text!./../templates/propertySelect.html'], 
	function (Backbone, PropertyView, propertyTemplate) {
	/** 
	 * @class PropertySelectView
	 * */
	return PropertyView.extend({
		
		template: _.template(propertyTemplate),
		
		/** @inheritdoc */
		renderInput: function() {
			var pfx	= this.pfx;
			if(!this.$input){
				if(this.list && this.list.length){
					this.input = '<select>';
					_.each(this.list,function(el){
						var name 		= el.name ? el.name : el.value;
						var style 		= el.style ? el.style.replace(/"/g,'&quot;') : '';  
						this.input 		+= '<option value="'+el.value.replace(/"/g,'&quot;')+'" style="'+style+'">'+name+'</option>';
					},this);
					this.input 	+= '</select>';
					this.$input = $(this.input);
					this.$el.find('#'+ pfx +'input-holder').html(this.$input); 
				}
			}
			this.setValue(this.componentValue, 0);
		}, 

	});
});
