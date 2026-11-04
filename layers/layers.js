var wms_layers = [];

var format_Cameroon_0 = new ol.format.GeoJSON();
var features_Cameroon_0 = format_Cameroon_0.readFeatures(json_Cameroon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cameroon_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cameroon_0.addFeatures(features_Cameroon_0);
var lyr_Cameroon_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cameroon_0, 
                style: style_Cameroon_0,
                popuplayertitle: 'Cameroon',
                interactive: false,
                title: '<img src="styles/legend/Cameroon_0.png" /> Cameroon'
            });
var format_CentralAfricanRepublic_1 = new ol.format.GeoJSON();
var features_CentralAfricanRepublic_1 = format_CentralAfricanRepublic_1.readFeatures(json_CentralAfricanRepublic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralAfricanRepublic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralAfricanRepublic_1.addFeatures(features_CentralAfricanRepublic_1);
var lyr_CentralAfricanRepublic_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentralAfricanRepublic_1, 
                style: style_CentralAfricanRepublic_1,
                popuplayertitle: 'Central African Republic',
                interactive: false,
                title: '<img src="styles/legend/CentralAfricanRepublic_1.png" /> Central African Republic'
            });
var format_Chad_2 = new ol.format.GeoJSON();
var features_Chad_2 = format_Chad_2.readFeatures(json_Chad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chad_2.addFeatures(features_Chad_2);
var lyr_Chad_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chad_2, 
                style: style_Chad_2,
                popuplayertitle: 'Chad',
                interactive: false,
                title: '<img src="styles/legend/Chad_2.png" /> Chad'
            });
var format_SouthSudan_3 = new ol.format.GeoJSON();
var features_SouthSudan_3 = format_SouthSudan_3.readFeatures(json_SouthSudan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthSudan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthSudan_3.addFeatures(features_SouthSudan_3);
var lyr_SouthSudan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthSudan_3, 
                style: style_SouthSudan_3,
                popuplayertitle: 'South Sudan',
                interactive: false,
                title: '<img src="styles/legend/SouthSudan_3.png" /> South Sudan'
            });
var format_Sudan_4 = new ol.format.GeoJSON();
var features_Sudan_4 = format_Sudan_4.readFeatures(json_Sudan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sudan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sudan_4.addFeatures(features_Sudan_4);
var lyr_Sudan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sudan_4, 
                style: style_Sudan_4,
                popuplayertitle: 'Sudan',
                interactive: false,
                title: '<img src="styles/legend/Sudan_4.png" /> Sudan'
            });
var format_MediaReview_5 = new ol.format.GeoJSON();
var features_MediaReview_5 = format_MediaReview_5.readFeatures(json_MediaReview_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MediaReview_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MediaReview_5.addFeatures(features_MediaReview_5);
var lyr_MediaReview_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MediaReview_5, 
                style: style_MediaReview_5,
                popuplayertitle: 'Media Review',
                interactive: true,
    title: 'Media Review<br />\
    <img src="styles/legend/MediaReview_5_0.png" /> Environment<br />\
    <img src="styles/legend/MediaReview_5_1.png" /> Humanitarian<br />\
    <img src="styles/legend/MediaReview_5_2.png" /> Politics & Governance<br />\
    <img src="styles/legend/MediaReview_5_3.png" /> Resilience & Extras<br />\
    <img src="styles/legend/MediaReview_5_4.png" /> Security<br />\
    <img src="styles/legend/MediaReview_5_5.png" /> <br />' });

lyr_Cameroon_0.setVisible(true);lyr_CentralAfricanRepublic_1.setVisible(true);lyr_Chad_2.setVisible(true);lyr_SouthSudan_3.setVisible(true);lyr_Sudan_4.setVisible(true);lyr_MediaReview_5.setVisible(true);
var layersList = [lyr_Cameroon_0,lyr_CentralAfricanRepublic_1,lyr_Chad_2,lyr_SouthSudan_3,lyr_Sudan_4,lyr_MediaReview_5];
lyr_Cameroon_0.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_CentralAfricanRepublic_1.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Chad_2.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_SouthSudan_3.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Sudan_4.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_MediaReview_5.set('fieldAliases', {'Title': 'Title', 'Date': 'Date', 'Type': 'Type', 'Link': 'Link', 'Source Name': 'Source Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Cameroon_0.set('fieldImages', {'adm3_name': '', 'adm3_name1': '', 'adm3_name2': '', 'adm3_name3': '', 'adm3_pcode': '', 'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm3_ref_n': '', 'center_lat': '', 'center_lon': '', });
lyr_CentralAfricanRepublic_1.set('fieldImages', {'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm2_ref_n': '', 'center_lat': '', 'center_lon': '', });
lyr_Chad_2.set('fieldImages', {'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'center_lat': '', 'center_lon': '', });
lyr_SouthSudan_3.set('fieldImages', {'adm3_name': '', 'adm3_name1': '', 'adm3_name2': '', 'adm3_name3': '', 'adm3_pcode': '', 'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm3_ref_n': '', 'center_lat': '', 'center_lon': '', });
lyr_Sudan_4.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_MediaReview_5.set('fieldImages', {'Title': '', 'Date': '', 'Type': '', 'Link': '', 'Source Name': '', 'Location': '', 'Latitude': '', 'Longitude': '', });
lyr_Cameroon_0.set('fieldLabels', {'adm3_name': 'no label', 'adm3_name1': 'no label', 'adm3_name2': 'no label', 'adm3_name3': 'no label', 'adm3_pcode': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm3_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_CentralAfricanRepublic_1.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Chad_2.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_SouthSudan_3.set('fieldLabels', {'adm3_name': 'no label', 'adm3_name1': 'no label', 'adm3_name2': 'no label', 'adm3_name3': 'no label', 'adm3_pcode': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm3_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Sudan_4.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_MediaReview_5.set('fieldLabels', {'Title': 'no label', 'Date': 'no label', 'Type': 'no label', 'Link': 'no label', 'Source Name': 'no label', 'Location': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_MediaReview_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});