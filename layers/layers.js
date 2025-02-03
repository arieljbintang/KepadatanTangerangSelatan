var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_VeryHighdensity_1 = new ol.format.GeoJSON();
var features_VeryHighdensity_1 = format_VeryHighdensity_1.readFeatures(json_VeryHighdensity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VeryHighdensity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VeryHighdensity_1.addFeatures(features_VeryHighdensity_1);
var lyr_VeryHighdensity_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VeryHighdensity_1, 
                style: style_VeryHighdensity_1,
                popuplayertitle: 'Very High density',
                interactive: true,
                title: '<img src="styles/legend/VeryHighdensity_1.png" /> Very High density'
            });
var format_Highdensity_2 = new ol.format.GeoJSON();
var features_Highdensity_2 = format_Highdensity_2.readFeatures(json_Highdensity_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highdensity_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highdensity_2.addFeatures(features_Highdensity_2);
var lyr_Highdensity_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highdensity_2, 
                style: style_Highdensity_2,
                popuplayertitle: 'High density',
                interactive: true,
                title: '<img src="styles/legend/Highdensity_2.png" /> High density'
            });
var format_Middensity_3 = new ol.format.GeoJSON();
var features_Middensity_3 = format_Middensity_3.readFeatures(json_Middensity_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Middensity_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Middensity_3.addFeatures(features_Middensity_3);
var lyr_Middensity_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Middensity_3, 
                style: style_Middensity_3,
                popuplayertitle: 'Mid density',
                interactive: true,
                title: '<img src="styles/legend/Middensity_3.png" /> Mid density'
            });
var format_wilayahadm_kelurahantangsel_4 = new ol.format.GeoJSON();
var features_wilayahadm_kelurahantangsel_4 = format_wilayahadm_kelurahantangsel_4.readFeatures(json_wilayahadm_kelurahantangsel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wilayahadm_kelurahantangsel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wilayahadm_kelurahantangsel_4.addFeatures(features_wilayahadm_kelurahantangsel_4);
var lyr_wilayahadm_kelurahantangsel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wilayahadm_kelurahantangsel_4, 
                style: style_wilayahadm_kelurahantangsel_4,
                popuplayertitle: 'wilayah adm_kelurahantangsel',
                interactive: true,
                title: '<img src="styles/legend/wilayahadm_kelurahantangsel_4.png" /> wilayah adm_kelurahantangsel'
            });
var group_TataRuang = new ol.layer.Group({
                                layers: [lyr_VeryHighdensity_1,lyr_Highdensity_2,lyr_Middensity_3,lyr_wilayahadm_kelurahantangsel_4,],
                                fold: "open",
                                title: 'Tata Ruang'});

lyr_GoogleSatellite_0.setVisible(true);lyr_VeryHighdensity_1.setVisible(true);lyr_Highdensity_2.setVisible(true);lyr_Middensity_3.setVisible(true);lyr_wilayahadm_kelurahantangsel_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_TataRuang];
lyr_VeryHighdensity_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Highdensity_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Middensity_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_wilayahadm_kelurahantangsel_4.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'Jml_Pen_lk': 'Jml_Pen_lk', 'Jml_Pen_PR': 'Jml_Pen_PR', 'Jml_PenTol': 'Jml_PenTol', 'Sex Ratio': 'Sex Ratio', });
lyr_VeryHighdensity_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Highdensity_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Middensity_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_wilayahadm_kelurahantangsel_4.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'Jml_Pen_lk': 'TextEdit', 'Jml_Pen_PR': 'TextEdit', 'Jml_PenTol': 'TextEdit', 'Sex Ratio': 'TextEdit', });
lyr_VeryHighdensity_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Highdensity_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Middensity_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_wilayahadm_kelurahantangsel_4.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'Jml_Pen_lk': 'no label', 'Jml_Pen_PR': 'no label', 'Jml_PenTol': 'no label', 'Sex Ratio': 'no label', });
lyr_wilayahadm_kelurahantangsel_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});