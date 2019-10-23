
        <?php
                ini_set("display_errors", 1);
                error_reporting(E_ALL ^ E_NOTICE);
                $api_url = "https://www.data.qld.gov.au/api/3/action/datastore_search?resource_id=cf4d43d8-2aad-4512-99e6-f6be2bf24466&limit=1000";
                $cache_filename = "cache/slq-cache.json";

                if(file_exists($cache_filename)) { 
                    $data = file_get_contents($cache_filename);
                }
                else {
                    $data = file_get_contents($api_url);
                    file_put_contents($cache_filename, $data);
                };


                $data = json_decode($data, true);

                if(is_array($data)) {
                    foreach($data["result"]["records"] as $recordKey => $recordValue){
                        $recordTitle = $recordValue["title"];
                        $recordImageLarge = $recordValue["1000_pixel"];
                        $recordDescription = $recordValue["decsription"];
                        $recordSubject = $recordValue["subject"];
                        $recordImage = $recordValue["500_pixel"];
                        if($recordTitle && $recordImage && $recordImageLarge) && $recordDescription) {
                                echo "
                                <section class='record'>
                                    <a class= 'strip' data-strip-caption='" . $recordDescription . "' href='" . $recordImageLarge ."'><img src='" . $recordImage . "'></a>
                                </section>
                                ";
                             
                    }
                }
            };
    
            ?>        