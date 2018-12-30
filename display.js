$.display = $.extend($.app || {}, {
	data: {},
	svrUrl : 'http://gcpat.cf/ws.php?key=43219874329ADFASLK983274',
	
	init: function(){
		var $this = this;
		$('input#get-data').unbind('click').on('click',function(){
			$this.getData();
		});
	},
	
	getData: function(){
		var $this = this;
		$.app.post(this.svrUrl,{key:'43219874329ADFASLK983274'},function(r,m){
			$this.data = r;
			$this.fetchData();
		},'JSON');
	},
	
	fetchData: function(){
		var $this = this;
		console.log($this.data);
		if(!$.isEmptyObject($this.data)){
			var row = '';
			$.each($this.data,function(a,b){
				row+='<span style="display:block">Data : '+b+'</span>';
			});
			$('div#data-holder').html(row);
		}
	}
	
	
});
$.display.init();